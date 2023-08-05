import SectionTitle from "@/components/SectionTitle";
import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const login = ({ session }) => {
const router = useRouter()
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(()=>{

if(session){
const destination = router.query.destination || "/users/profile"

router.replace(destination)
}
  },[router,session])

  if(session){
    return null
  }


  if(!session){
    return (
      <div className='wrapper section-p min-h-screen flex justify-center items-center'>
        <div>
          <SectionTitle
            title='Get started with google'
            desc='Please login to continue with our features'
          />
  
          <div className='flex justify-center items-center py-10'>
            <button
              onClick={loginWithGoogle}
              className='flex gap-5 items-center text-xl bg-black hover:bg-black/40 duration-300 py-3 px-12 rounded-lg shadow-xl'
            >
              <span>
                <FcGoogle className='text-4xl' />
              </span>
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
