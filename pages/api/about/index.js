import { professionData } from "@/prisma/controllers";

export default async function handler(req, res){

try{
  if(req.method === "GET"){
    const about  = await professionData()
    return res.status(200).json(about)
   }
}catch(err){
  return res.status(500).json({error:err.message})

}
}