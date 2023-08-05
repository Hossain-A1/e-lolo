import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariance = cva(
  "px-6 py-3 duration-300 rounded-xl",

  {
    variants: {
      color: {
        rose: "bg-rose-700 text-white hover:bg-rose-700/90",
        dark: "bg-gray-700 text-white hover:bg-gray-700/90",
        ghost:
          "bg-transparent border w-full text-center  text-gray-700 hover:bg-gray-500/10",
        transparent:
          "bg-transparent border font-semibold rounded-lg w-full text-center text-white hover:bg-gray-500/10",
      },
    },
    defaultVariants: {
      color: "dark",
    },
  }
);

const Button = ({ href, placeholder, color }) => {
  return (
    <Link href={href} className={clsx(buttonVariance({ color }))}>
      {placeholder}
    </Link>
  );
};

export default Button;