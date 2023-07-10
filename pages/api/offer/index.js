import { getOffers } from "@/prisma/controllers";

export default async function handler(req,res){

 try{
  if(req.method === "GET"){
   const offers  = await getOffers() 
   return res.status(200).json(offers)
  }

 }catch(err){
  return res.status(500).json({error:err.message})

 }
}