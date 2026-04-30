import React from "react";
import Image from "next/image";
import { FiArrowRight, FiMaximize, FiLayers } from "react-icons/fi";

const TilesCard = ({ tile }) => {
  const {
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
  } = tile;

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      <div className="relative h-64 w-full overflow-hidden">
  <div className="absolute top-4 left-4 z-10">
    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold rounded-full shadow-sm border border-blue-50 uppercase tracking-widest">
      {category}
    </span>
  </div>

  <Image
    src={image}
    alt={title}
    fill                          // ✅ width/height এর বদলে fill
    sizes="(max-width: 768px) 100vw, 400px"
    className="object-cover"      // ✅ style prop এর বদলে className
    priority={false}
  />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="bg-white p-3 rounded-full text-slate-900 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
            <FiMaximize size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <div className="text-right">
            <p className="text-2xl font-black text-slate-900 leading-none">
              <span className="text-sm font-medium text-gray-400 mr-1">
                {currency}
              </span>
              {price}
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-5 leading-relaxed">
          {description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2 rounded-lg">
            <FiMaximize className="text-blue-500" />
            {dimensions}
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 p-2 rounded-lg">
            <FiLayers className="text-blue-500" />
            {material}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 bg-slate-900 group-hover:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
          View Details
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default TilesCard;
