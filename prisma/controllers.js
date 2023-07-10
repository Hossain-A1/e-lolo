import prisma from "./prisma";
// get all products

export const getProducts = async () => {
  const products = await prisma.product.findMany({});
  return products;
};

//  get a products

export const getProduct = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  return product;
};

// get offers 
// export const getOffers = async()=>{
//   const offers = await prisma.offer.findMany({})
//   return offers
// }

// //about data
// export const professionData = async()=>{
//   const profassions = await prisma.about.findMany({})
//   return profassions
// }


