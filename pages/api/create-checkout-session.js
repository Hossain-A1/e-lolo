const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createStripeCheckout(req, res) {
  const { items, name, email, address, phone, productTitle,productId } = req.body;

  const transformItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "USD",
      unit_amount: +(item.price * 100).toFixed(2),
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}`,

    metadata: {
      name,
      email,
      phone,
      address,
      productTitle,
      productId,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}

export default createStripeCheckout;
