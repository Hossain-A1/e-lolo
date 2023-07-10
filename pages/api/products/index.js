

import { getProducts } from "@/prisma/controllers";

// all products
export default async function handler(req,res){

  try{

    if(req.method = "GET"){
      const products = await getProducts()
    return  res.status(200).json(products)
    }
  }catch(err){
return res.status(500).json({error:err.message})
  }
}
