"use client";
import React from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { FiEdit, FiMail, FiUser, FiCalendar, FiSettings } from 'react-icons/fi';

const MyProfile = () => {

  const { data: sessionData, isPending } = authClient.useSession();
  const user = sessionData?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Please Login first</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-12">

      <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:flex items-end justify-between border-b border-gray-50">
            <div className="sm:flex items-center gap-6 text-center sm:text-left">
              <div className="relative inline-block">
                <Image
                  src={user.image || "https://avatar.iran.liara.run/public/30"}
                  alt="Profile"
                  width={140}
                  height={140}
                  className="rounded-2xl border-4 border-white shadow-lg object-cover bg-gray-100"
                />
                <button className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-lg text-white shadow-lg hover:bg-blue-700 transition-all">
                  <FiEdit size={16} />
                </button>
              </div>
              
              <div className="mt-4 sm:mt-0">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">{user.name}</h1>
                <p className="text-gray-500 font-medium flex items-center justify-center sm:justify-start gap-2 mt-1">
                  <FiMail className="text-blue-500" /> {user.email}
                </p>
              </div>
            </div>

            <button className="mt-6 sm:mt-0 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-slate-200">
              <FiSettings /> Account Settings
            </button>
          </div>

          <div className="p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FiUser className="text-blue-600" /> Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</p>
                <p className="text-slate-700 font-bold mt-1">{user.name}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</p>
                <p className="text-slate-700 font-bold mt-1">{user.email}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-slate-700 font-bold">Active</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Member Since</p>
                <p className="text-slate-700 font-bold mt-1 flex items-center gap-2">
                  <FiCalendar /> May 2026
                </p>
              </div>
            </div>

        
            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="text-blue-800 font-bold mb-2">Welcome to your dashboard!</h4>
              <p className="text-blue-600 text-sm leading-relaxed">
                এখানে আপনি আপনার অ্যাকাউন্টের সকল তথ্য পরিবর্তন এবং আপডেট করতে পারবেন। আপনার সিকিউরিটির জন্য নিয়মিত পাসওয়ার্ড পরিবর্তন করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;