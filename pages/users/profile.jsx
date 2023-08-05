import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { MdOutlineLogout } from "react-icons/md";

const profile = ({ session }) => {
  const router = useRouter();

  const logoutWithGoogle = async () => {
    try {
      await signOut("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }
  
  return (
    <div className='wrapper section-p min-h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center gap-5'>
        <div className='w-20 h-20 '>
          <Image
            src={session.user.image}
            alt={session.user.name}
            priority
            width={20}
            height={20}
            className='w-full h-full object-fill rounded-full'
          />
        </div>
        <h2>{session.user.name}</h2>

        <button
          onClick={logoutWithGoogle}
          className='flex gap-5 items-center text-xl bg-black hover:bg-black/40 duration-300 py-3 px-12 rounded-lg shadow-xl'
        >
          <span>
            <MdOutlineLogout className='text-4xl' />
          </span>
          Log out with google
        </button>
      </div>
    </div>
  );
};

export default profile;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
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
