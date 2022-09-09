import {BiCodeAlt} from "react-icons/bi";
export const Header = () => {
  return (
    <header className='w-full h-20 flex justify-around items-center  bg-dark drop-shadow-2xl'>
      <span className='text-neutral-400 font-roboto font-bold text-2xl'>
        <BiCodeAlt className='text-3xl' />
      </span>
      <nav className=''>
        <a
          href=''
          className='bg-neutral-800 hover:text-dark hover:bg-green-500 font-roboto font-medium px-6 py-3 rounded-md text-neutral-400 transition-colors duration-300'>
          HIRE
        </a>
      </nav>
    </header>
  );
};
