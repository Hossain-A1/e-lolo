import prisma from "@/prisma/prisma";
import { currencyConverter } from "@/utils/currencyConverter";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const OrdersPage = ({ session, consumer }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }
  return (
    <div className='wrapper section-p min-h-screen flex flex-col items-center gap-5'>
      <h2 className='text-2xl'>
        You have purchased ({consumer.orders.length}) product
        {consumer.orders.length > 1 ? "s" : ""}
      </h2>

      <table className='border-2 border-green-200 border-collapse w-[80%] h-[80%] text-center'>
        <thead>
          <tr className='font-semibold text-lg bg-yellow-700'>
            <th className='border '>name</th>
            <th className='border'>phone</th>
            <th className='border'>Address</th>
            <th className='border'>
              Product{consumer.orders.length > 1 ? "s" : ""}
            </th>
            <th className='border'>price</th>
          </tr>
        </thead>
        <tbody>
          {consumer.orders.map((product) => (
            <tr key={product.id}>
              <td className='border'>{product.name}</td>
              <td className='border'>{product.phone}</td>
              <td className='border'>{product.address}</td>
              <td className='border'>{product.productTitle}</td>
              <td className='border'>
                {currencyConverter(product.amountTotal)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const consumer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!session || !consumer) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
      consumer,
    },
  };
};
