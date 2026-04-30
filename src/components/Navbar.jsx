"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiLogIn, FiUserPlus, FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import NavLink from './NavLinks';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <HiOutlineSquares2X2 size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-800">
                TILE<span className="text-blue-600">LUX</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-bold text-gray-600">
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/all-tiles'>All Tiles</NavLink>
            <NavLink href='/my-profile'>My Profile</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/register"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-all"
            >
              <FiUserPlus size={18} className="text-blue-600" /> 
              Sign Up
            </Link>
            
            <Link 
              href="/login"
              className="flex items-center gap-2 px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
            >
              <FiLogIn size={18} /> 
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

     
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-100 border-t border-gray-100`}>
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
          <div className="flex flex-col space-y-3 border-b border-gray-50 pb-4">
            <NavLink className="font-bold" href='/' >Home</NavLink>
            <NavLink className="font-bold" href='/all-tiles' >All Tiles</NavLink>
            <NavLink className="font-bold" href='/my-profile' >My Profile</NavLink>
          </div>
          
          <div className="pt-2 flex flex-col gap-3">
            <Link 
              href="/register" 
              className="flex items-center gap-3 px-4 py-3 font-bold text-gray-700 bg-gray-50 rounded-xl"
             
            >
              <FiUserPlus size={20} className="text-blue-600" /> Sign Up
            </Link>
            <Link 
              href="/login" 
              className="flex items-center gap-3 px-4 py-3 font-bold text-white bg-blue-600 rounded-xl"
            
            >
              <FiLogIn size={20} /> Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;