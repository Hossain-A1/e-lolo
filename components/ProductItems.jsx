import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import Link from "next/link";

const ProductItems = ({ product }) => {
  return (
    <div className="wrapper py-10 w-full">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-[13rem] overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={440}
            height={360}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="details bg-violet-950/50 p-5 ">
          <div className="flex justify-between items-center">
            <div className="product-left">
              <h2 className="text-gray-400 font-sans uppercase  text-2xl">
                {product.catagory}

              </h2>
              <p className="text-gray-400 font-bold capitalize">
              {product.title}

              </p>
              <p className="text-gray-400 font-bold capitalize">
                <span className="text-violet-600 font-medium text-lg">
                  Color:
                </span>{" "}
                {product.option}
              </p>

              <p className=" font-sans text-rose-700 text-2xl">
                {" "}
                <span className="text-violet-600 font-medium text-lg">
                  Price:
                </span>{" "}
                {currencyConverter(product.price)}
              </p>
            </div>

         
          </div>


          <Link
            href={`/products/${product.id}`}
            className="btn btn-info mt-3 w-36 text-violet-950 font-semibold"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
