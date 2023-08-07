import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonVariants = cva(
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
      size: {
        default: "py-3 px-6",
        full: "py-3 w-[50%]",
      },
    },
    defaultVariants: {
      color: "dark",
      size:'default'
    },
  }
);

const Button = ({ href, placeholder, color,size }) => {
  return (
    <Link className={clsx(buttonVariants({ color,size}))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
