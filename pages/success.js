import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";

const SuccessPage = ({session}) => {
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
    <div className='bg-black min-h-screen wrapper section-p flex flex-col items-center gap-5'>
      <h2 className='lg:text-4xl text-xl font-medium capitalize text-white text-center flex justify-center items-center gap-3'>
        <span>
          <TiTickOutline className='text-5xl border rounded-full' />
        </span>
        Your payment has been successfull.
      </h2>

      <Button
        href='/orders'
        size='full'
        color='transparent'
        placeholder='see orders'
      />
    </div>
  );
};

export default SuccessPage;

export const getServerSideProps = async(context)=>{
const session = await getSession(context)

if(!session){
  return{
    redirect:{
      destination:'/users/login',
      permanent:true
    }
  }
}
return{
  props:{
    session
  }
}
}