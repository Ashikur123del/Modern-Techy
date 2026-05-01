"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiMaximize, FiLayers } from "react-icons/fi";
import Link from "next/link";
import { toast } from "react-toastify";

const TilesCard = ({ tile, index = 0 }) => {
  const {
    id,
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock,
  } = tile;

  const handleNotify = (e) => {
    if (!inStock) {
      toast.info(`Sorry, ${title} is currently unavailable.`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-50">
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          <span className="px-2.5 py-1 bg-white/80 backdrop-blur-md text-blue-600 text-[10px] font-bold rounded-full border border-white/60 uppercase tracking-widest">
            {category}
          </span>
          {!inStock && (
            <span className="px-2.5 py-1 bg-red-500/90 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
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
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h2 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <div className="text-base font-black text-slate-900 shrink-0">
            <span className="text-[10px] font-medium text-slate-400 mr-0.5">
              {currency}
            </span>
            {price}
          </div>
        </div>

        <p className="text-slate-400 text-xs line-clamp-1 mb-3">
          {description || `${material} · ${dimensions}`}
        </p>

        <div className="flex gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg">
            <FiMaximize size={11} className="text-blue-400" /> {dimensions}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg">
            <FiLayers size={11} className="text-blue-400" /> {material}
          </div>
        </div>

        {inStock ? (
          <Link href={`/all-tiles/${id}`} passHref>
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="mt-auto w-full py-2.5 relative overflow-hidden rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-900 transition-colors group/btn cursor-pointer"
            >
              <div className="absolute inset-0 w-0 group-hover/btn:w-full bg-blue-600 transition-all duration-300" />
              <span className="relative z-10 flex items-center gap-1.5">
                See Details
                <FiArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </span>
            </motion.div>
          </Link>
        ) : (
          <button
            onClick={handleNotify}
            className="mt-auto w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-300 cursor-not-allowed"
          >
            Out of Stock
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TilesCard;