import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRef, useState } from "react";

const Navber = () => {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  // const navActive = ({isActive})=>{
  //   return{
  //     color: isActive ? "#f43f5e" : null
  //   }

  // }

  const serachHeandler = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    // feild clear
    setSearchQuery("");
    searchRef.current.blur();
  };

  return (
   <nav className="">
     <div className=' navbar bg-violet-950 flex justify-around items-center'>
      <div className='navbar-start lg:hidden'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-5'
          >
            <Link
              href='/'
              className='capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
            >
              Home
            </Link>
            <Link
              href='/products'
              className='capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
            >
              products
            </Link>
            <Link
              href='/offer'
              className='capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
            >
              offer
            </Link>
            <Link
              href='/about'
              className='capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
            >
              about
            </Link>
            <Link
              href='/contact'
              className='capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
            >
              contact
            </Link>
            <div>
              <Link href='/signin' className='btn btn-primary text-gray-900'>
                singin
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <div className='navbar-center space-x-10 max-lg:hidden'>
        <h2 className='btn btn-ghost text-xl uppercase'>E-lolo</h2>

        <div className='nav-links flex justify-center items-center gap-5'>
          <Link
            href='/'
            className=' nav-link capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
          >
            Home
          </Link>
          <Link
            href='/products'
            className='nav-link  capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
          >
            products
          </Link>
          <Link
            href='/offer'
            className='nav-link  capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
          >
            offer
          </Link>
         {
          session && (
            <Link
            href='/orders'
            className='nav-link  capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
          >
            orders
          </Link>
          )
         }
          <Link
            href='/about'
            className='nav-link  capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
          >
            about
          </Link>
          <Link
            href='/contact'
            className='nav-link  capitalize text-gray-300 hover:text-gray-200 duration-300 font-medium'
          >
            contact
          </Link>
        </div>
      </div>
      <div className='navber-end  px-4  flex justify-between lg:gap-10 gap-5'>
        <form onSubmit={serachHeandler} className='Search-bar'>
          <input
            ref={searchRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type='search'
            required
            className='py-2 lg:px-12 px-2 bg-white outline-none border duration-300 text-gray-900 rounded-full font-medium'
            placeholder='search..'
          />
        </form>
        <div>
          {!session ? (
            <Link
              href='/users/login'
              className=' max-sm:hidden btn btn-primary text-gray-900'
            >
              sing in
            </Link>
          ) : (
            <Link
              href='/users/login'
              className=' max-sm:hidden btn btn-info text-gray-900'
            >
              sing in
            </Link>
          )}
        </div>
      </div>
    </div>
   </nav>
  );
};

export default Navber;
