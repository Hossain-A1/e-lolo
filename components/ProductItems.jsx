import Image from "next/image";
import Link from "next/link";

const ProductItems = ({ product }) => {
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
                {product.price}
              </p>
            </div>
          </div>

          <p className="text-gray-400 ">
            <span className="text-violet-600 font-medium text-lg">
              Description:
            </span>{" "}
            {product.description.substring(0, 100)}...
          </p>

          <Link
            href={`/products/${product.id}`}
            className="btn btn-info mt-3 w-28 text-violet-950 font-semibold"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
