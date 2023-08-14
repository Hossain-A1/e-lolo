import { getProducts } from "@/prisma/controllers";
import Products from "./products";


const HomePage = ({products}) => {
  return <div  className="wrapper section-p">
    <Products products={products}/>
    
  </div>;
};

export default HomePage;
export const getServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};