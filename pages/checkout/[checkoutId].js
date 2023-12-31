import SectionTitle from "@/components/SectionTitle";
import { getProduct } from "@/prisma/controllers";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

// stripe promise//
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = ({ product }) => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    productTitle: product.title,
    price: product.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prevData) => ({
        ...prevData,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  // check-out handler//

  const handleCheckOut = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    // send a pst req to the server//

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [product],
      name: formData.name,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      productTitle: formData.productTitle,
      productId:product.id
    });

    // redirect to stripe payment//
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className='wrapper section-p min-h-screen'>
      <SectionTitle
        title='Please provide your information.'
        desc='To finalize your purchase, please fill out this form.'
      />

      <form
        onSubmit={handleCheckOut}
        className='form-control flex flex-col items-center gap-5'
      >
        <div className='flex flex-col gap-2 lg:w-[60%] w-full'>
          <label htmlFor='name' className='font-semibold cursor-pointer'>
            Name
          </label>
          <input
            type='text'
            placeholder='pakka'
            value={formData.name}
            id='name'
            readOnly
            className='py-4 px-4  bg-violet-500/30 outline-none focus:outline-violet-700 duration-300 rounded'
          />
        </div>
        <div className='flex flex-col gap-2 lg:w-[60%] w-full'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='pakka@ex.com'
            value={formData.email}
            id='email'
            readOnly
            className='py-4 px-4  bg-violet-500/30 outline-none focus:outline-violet-700 duration-300 rounded'
          />
        </div>
        <div className='flex flex-col gap-2 lg:w-[60%] w-full'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            placeholder='+203xxxxxx45'
            id='phone'
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className='py-4 px-4  bg-violet-500/30 outline-none focus:outline-violet-700 duration-300 rounded'
          />
        </div>
        <div className='flex flex-col gap-2 lg:w-[60%] w-full'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            placeholder='sico-saudi-44'
            id='address'
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className='py-4 px-4  bg-violet-500/30 outline-none focus:outline-violet-700 duration-300 rounded'
          />
        </div>
        <div className='flex flex-col gap-2 lg:w-[60%] w-full'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            placeholder='Iphone-14pro'
            id='title'
            value={formData.productTitle}
            readOnly
            className='py-4 px-4  bg-violet-500/30 outline-none focus:outline-violet-700 duration-300 rounded'
          />
        </div>
        <div className='flex flex-col gap-2 lg:w-[60%] w-full'>
          <label htmlFor='price'>Price (USD)</label>
          <input
            type='number'
            placeholder='333$'
            id='price'
            value={formData.price}
            readOnly
            className='py-4 px-4  bg-violet-500/30 outline-none focus:outline-violet-700 duration-300 rounded'
          />
        </div>

        <div className='lg:w-[60%] w-full flex justify-center'>
          <button
            type='submit'
            role='link'
            className='btn btn-secondary w-full'
          >
            Proceed to check-out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

export const getServerSideProps = async ({ query }) => {
  const product = await getProduct(query.checkoutId);

  return {
    props: {
      product,
    },
  };
};
