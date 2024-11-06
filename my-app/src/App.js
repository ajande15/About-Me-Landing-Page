import './App.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="website__wrapper">
    <div className="header__section w-full h-20 bg-white flex px-20">
      <div className='logo w-1/2 h-full flex items-center'>
      <h1 className='text-white text-base font-Poppins font-bold'>Madelyn Torff</h1>
      </div>
      <div className='header__content w-1/2 h-full flex items-center justify-end gap-8 '>
      <p className='cursor-pointer font-semibold underline underline-offset-8'>About</p>
      <p className='cursor-pointer'>Projects</p>
      <p className='cursor-pointer'>Contacts</p>
      </div>
    </div>
    <div className="hero__section w-full h-full bg-white flex items-center">
      <div className='left__side w-1/2 h-full flex flex-col pt-40 gap-10 pl-20'>
        <h1 className='text-white text-5xl font-bold'>About Me</h1>
        <p className='text-grey text-lg font-medium font-poppins  w-2/3'>Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.</p>
        <button className='py-2 px-2 text-slate-50 rounded-md bg-accent w-28 hover:bg-blue-700 duration-500'>Resume</button>
      </div>
      <div className='right__side w-1/2 h-full flex pt-24 justify-center'>
        <img className='lasagna rounded-r-full h-3/4' src="https://i.pinimg.com/564x/81/59/94/81599450ce7a59b118099f5be1fa22e9.jpg"/>
      </div>
    </div>
    <div className='footer__section h-24 absolute bottom-8 w-full flex items-center justify-center gap-6'>
    <i class="fa-brands fa-instagram text-4xl cursor-pointer text-accent duration-500 hover:text-blue-700"></i>
    <i class="fa-brands fa-linkedin text-4xl cursor-pointer text-accent duration-500 hover:text-blue-700"></i>
    <i class="fa-solid fa-envelope text-4xl cursor-pointer text-accent duration-500 hover:text-blue-700"></i>
    </div>
    </div>
  );
}

export default App