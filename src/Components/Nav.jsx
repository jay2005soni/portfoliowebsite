
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
function Navbar () {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
    <>
    <nav className='flex place-content-between items-center bg-[#161616] font-normal p-2.5'>

        <div className="flex items-right space-x-7 y-10">
        <h2 className='bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent text-2xl'>Jaykishan Soni</h2>
      </div>
        <nav className="hidden md:flex space-x-20 font-semibold text-gray-800">
        <Link className='text-white text-lg font-medium' to="/home">Home</Link>
        <ul className='flex gap-20 text-lg text-white '>
            <li>
                <Link className='hover:underline hover:text-white' to="/about">About</Link>
            </li>
            <li>
               <Link className='hover:underline hover:text-[#FFfff]' to="/project">Project</Link>
            </li>
             <li>
                <Link className='hover:underline hover:text-[#FFA119]' to="/services">Services</Link>
            </li>
            
        </ul>
        </nav>
         <div className="hidden md:block">
       
        </div>

         <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
            {isMenuOpen && (
        <div className="fixed top-16 right-0 w-full h-full bg-white rounded-lg shadow-lg p-4 z-50 md:hidden  ">
           <Link className='block py-2 px-40 text-gray-800 hover:text-green-500' to="/home">Home</Link>
           
            <Link className='block py-2 px-40 text-gray-800 hover:text-green-500' to="/about">About</Link>
             <Link className='block py-2 px-40 text-gray-800 hover:text-green-500' to="/referral">Referral</Link>
             <Link className='block py-2 px-40 text-gray-800 hover:text-green-500' to="/contact">Contact</Link>
          <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 text-sm font-semibold w-full">
            Get In Touch
          </button>
        </div>
      )} 
    </nav>
    </>
  )
}

export default Navbar ;


                // <li>
                // <NavLink to="/contact" className={({isActive}) =>
                // isActive
                // ? 'text-blue-500 font-bold border-b-2 border-blue-500'
                // : 'text-black hover:underline'
                // }>Contact</NavLink>
                // </li>
