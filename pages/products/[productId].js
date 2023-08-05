import { getProduct } from "@/prisma/controllers";
import { currencyConverter } from "@/utils/currencyConverter";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductItems = ({ product }) => {
  const {data:session} = useSession()
  const router = useRouter();

  const handleEnroll = () => {
    if(session){
      router.push(`/checkout/${product.id}`);
    }else{
      router.push(`/users/login?destination=/checkout/${product.id}`);

    }
  };

  return (
    <div className="wrapper py-10 w-full lg:w-[28rem] overflow-hidden ">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-[20rem] ">
          <Image
            src={product.image}
            alt={product.title}
            width={640}
            height={360}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="details bg-violet-950/50 p-5 ">
          <div className="flex justify-between items-center">
            <div className="product-left">
              <h2 className="text-gray-400 font-bold ">
                <span className="text-violet-600 font-medium text-lg">
                  Name:
                </span>{" "}
                {product.title}
              </h2>
              <p className="text-gray-400 font-bold ">
                <span className="text-violet-600 font-medium text-lg">
                  Brand:
                </span>{" "}
                {product.catagory}
              </p>
              <p className="text-gray-400 font-bold ">
                <span className="text-violet-600 font-medium text-lg">
                  Color:
                </span>{" "}
                {product.option}
              </p>
            </div>

            <div className="details-right ">
              <p className="text-gray-400 font-bold ">
                <span className="text-violet-600 font-medium text-lg">
                  Rating:
                </span>{" "}
                {product.rating}
              </p>
              <p className="text-gray-400 font-bold ">
                {" "}
                <span className="text-violet-600 font-medium text-lg">
                  Price:
                </span>{" "}
                {currencyConverter(product.price)}
              </p>
            </div>
          </div>

          <p className="text-gray-400 ">
            <span className="text-violet-600 font-medium text-lg">
              Description:
            </span>{" "}
            {product.description.substring(0, 100)}
          </p>

          <button
            onClick={handleEnroll}
            className="bg-teal-500 hover:bg-teal-600 duration-300 py-3 rounded-lg mt-3 text-violet-950  font-semibold w-full text-center"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;

export const getServerSideProps = async ({query}) => {
  const product = await getProduct(query.productId);

  return {
    props: {
      product,
    },
  };
};
