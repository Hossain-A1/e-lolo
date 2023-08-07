import { buffer } from "micro";
import prisma from "@/prisma/prisma";
import "@/preserve.entity.config.json";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const successOrder = async (session) => {
  console.log(`✅ order placed success`, session.id);

  let user = await prisma.user.findUnique({
    where: { email: session.metadata.email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: session.metadata.email,
      },
    });
  }

  await prisma.order.create({
    data: {
      transactionId: session.id,
      amountTotal: session.amount_total / 100,
      name: session.metadata.name,
      phone: session.metadata.phone,
      address: session.metadata.address,
      productTitle: session.metadata.productTitle,
      productId: session.metadata.productId,

      user: {
        connect: { id: user.id },
      },
    },
  });
  return;
};

async function webhook(req, res) {
  if (req.method === "POST") {
    const reqBuffer = await buffer(req);
    const payload = reqBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(`❌webhook error`, err.message);
      return res.status(400).send({ error: `webhook error: ${err.message}` });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      try {
        await successOrder(session);
      } catch (err) {
        console.log(`❌webhook error`, err.message);
        return res.status(400).send({ error: `mongodb error: ${err.message}` });
      }

      console.log("✅ data uploded", session.id);
      return res.status(200).send(`data uploded:${session.id}`);
    }
  }
}

export default webhook;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
