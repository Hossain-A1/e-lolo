// get single product

import { getProduct } from "@/prisma/controllers";

export default async function handler(req,res) {
  try {
    if (req.method === "GET") {
      const product = await getProduct(req.query.productId);
  return res.status(200).json(product);
    }
  } catch (err) {
   return res.status(500).json({ error: err.message });
  }
}

