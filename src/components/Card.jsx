"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiMaximize, FiLayers } from "react-icons/fi";
import Link from "next/link";

import { toast } from "react-toastify";

const Card = ({ item, index }) => {
  const { title,  image, category, price, currency, dimensions, material, inStock, id } = item;

  const handleAlert = (e) => {
    if (!inStock) {
      e.preventDefault(); 
      toast.error("Sorry, this item is out of stock!");
    } else {
      toast.success(`Opening details for ${title}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-50">
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          <span className="px-2.5 py-1 bg-white/80 backdrop-blur-md text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-widest">
            {category}
          </span>
          {!inStock && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
              Sold Out
            </span>
          )}
        </div>

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h2 className="text-sm font-bold text-slate-800 line-clamp-1">{title}</h2>
          <p className="text-base font-black text-slate-900">
            <span className="text-[10px] font-medium text-slate-400 mr-0.5">{currency}</span>
            {price}
          </p>
        </div>

        <div className="flex gap-2 mb-4 mt-2">
          <div className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-50 px-2 py-1 rounded">
            <FiMaximize /> {dimensions}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-50 px-2 py-1 rounded">
            <FiLayers /> {material}
          </div>
        </div>

        <Link 
          href={inStock ? `/all-tiles/${id}` : "#"} 
          onClick={handleAlert}
          className={`mt-auto w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white transition-all ${
            inStock ? 'bg-slate-900 hover:bg-blue-600' : 'bg-slate-300 cursor-not-allowed'
          }`}
        >
          {inStock ? "View Details" : "Out of Stock"}
          {inStock && <FiArrowRight size={14} />}
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;