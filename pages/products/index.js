import ProductItems from "@/components/ProductItems";
import SectionTitle from "@/components/SectionTitle";
import { getProducts } from "@/prisma/controllers";

const Products = ({ products }) => {
  return (
    <div className='wrapper py-10'>
           <SectionTitle
        title=" Our product is tailored to meet your exact needs."
        desc=" Our product is designed to be customizable and flexible. You can choose the features and functions that are most important to you, and we'll create a product that meets those specific needs. We also offer personalized customer service, so that you can get the help you need when you need it.."
      />
      <div className='products-container grid lg:grid-cols-2 grid-cols-1 gap-2'>
        {products &&
          products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};
