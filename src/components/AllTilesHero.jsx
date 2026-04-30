"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import man from '../assets/man.jpg'


const AllTilesHero = () => {
  return (
     <div className="relative min-h-[50vh] w-full bg-slate-50">
      
      <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        
        <Image
          src={man}
          alt="Premium Tiles Background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Explore Our <span className="text-blue-400">Premium</span> Collection
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            আপনার স্বপ্নের ঘরকে সাজাতে বেছে নিন আমাদের সেরা সব টাইলস ডিজাইন। আধুনিকতা আর আভিজাত্যের এক অনন্য সমন্বয়।
          </motion.p>
        </div>
      </div>

    </div>
  )
}

export default AllTilesHero