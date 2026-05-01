"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiLogIn, FiUserPlus, FiMenu, FiX, FiLogOut, FiUser } from 'react-icons/fi';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import NavLink from './NavLinks';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data: sessionData, isPending } = authClient.useSession();
  const user = sessionData?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/singin"); 
        },
      },
    });
  };

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

  
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="h-10 w-10 bg-gray-200 animate-pulse rounded-full" />
            ) : user ? (
          
              <div className="flex items-center gap-4">
                <div className="text-right hidden lg:block">
                  <p className="text-sm font-bold text-slate-800 leading-none">{user.name}</p>
                </div>
                
                <div className="relative group">
                   <Image 
                    src={user.image || Avatar} 
                    alt="User" 
                    width={40} 
                    referrerPolicy='no-referrer'
                    height={40} 
                    className="rounded-full border-2 border-blue-100 object-cover cursor-pointer hover:border-blue-600 transition-all"
                  />
                </div>

                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-all"
                >
                  <FiLogOut size={18} /> Logout
                </button>
              </div>
            ) : (
    
              <>
                <Link 
                  href="/singup"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-all"
                >
                  <FiUserPlus size={18} className="text-blue-600" /> Sign Up
                </Link>
                <Link 
                  href="/singin"
                  className="flex items-center gap-2 px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  <FiLogIn size={18} /> Sign In
                </Link>
              </>
            )}
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

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
          

          <div className="flex flex-col space-y-3 border-b border-gray-50 pb-4 text-gray-600">
            <NavLink className="font-bold" href='/' onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink className="font-bold" href='/all-tiles' onClick={() => setIsOpen(false)}>All Tiles</NavLink>
            <NavLink className="font-bold" href='/my-profile' onClick={() => setIsOpen(false)}>My Profile</NavLink>
          </div>
          
          <div className="pt-2 flex flex-col gap-3">
            {user ? (
               <button 
                onClick={handleLogout}
                className="flex items-center justify-center gap-3 px-4 py-3 font-bold text-white bg-red-500 rounded-xl"
              >
                <FiLogOut size={20} /> Logout
              </button>
            ) : (
              <>
                <Link 
                  href="/singup" 
                  className="flex items-center gap-3 px-4 py-3 font-bold text-gray-700 bg-gray-50 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <FiUserPlus size={20} className="text-blue-600" /> Sign Up
                </Link>
                <Link 
                  href="/singin" 
                  className="flex items-center gap-3 px-4 py-3 font-bold text-white bg-blue-600 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <FiLogIn size={20} /> Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;