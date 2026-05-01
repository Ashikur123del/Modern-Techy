import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiXCircle, FiPackage, FiMaximize2 } from "react-icons/fi";

const TileDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://modern-techy.vercel.app/db.json`, { cache: 'no-store' });
  if (!res.ok) return <div className="text-center mt-20">Failed to load data.</div>;
  const data = await res.json(); 
  const tile = data.find((item) => item.id.toString() === id);

  if (!tile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-red-500">Tile not found!</h2>
        <Link href="/all-tiles" className="mt-4 text-blue-600 underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="container mx-auto px-6 py-6">
        <Link href="/all-tiles" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
          <FiArrowLeft /> Back to All Tiles
        </Link>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-4 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          
          <div className="lg:col-span-7">
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-3xl group">
              <Image 
                src={tile.image} 
                alt={tile.title} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute top-5 right-5">
                <span className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg ${tile.inStock ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                  {tile.inStock ? <FiCheckCircle /> : <FiXCircle />}
                  {tile.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-3">
                  {tile.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  {tile.title}
                </h1>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-blue-600">{tile.currency} {tile.price}</span>
                <span className="text-slate-400 text-sm">/ per sq. ft</span>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-blue-100 pl-4 italic">
                {tile.description}
              </p>

              <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-50 rounded-2xl text-blue-600">
                    <FiPackage size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">Material</p>
                    <p className="text-slate-900 font-bold">{tile.material}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-50 rounded-2xl text-blue-600">
                    <FiMaximize2 size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">Dimensions</p>
                    <p className="text-slate-900 font-bold">{tile.dimensions}</p>
                  </div>
                </div>
              </div>

        
              <button 
                disabled={!tile.inStock}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-400 transition-all active:scale-[0.98] shadow-xl shadow-blue-200"
              >
                {tile.inStock ? 'Add to Quote' : 'Currently Unavailable'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-3xl font-black text-slate-900">Discover More</h3>
              <p className="text-slate-500">Explore our premium collection of architectural tiles</p>
            </div>
            <Link href="/all-tiles" className="text-blue-600 font-bold hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.slice(0, 5).map((item) => (
              <Link href={`/all-tiles/${item.id}`} key={item.id} className="group">
                <div className="relative h-40 rounded-2xl overflow-hidden mb-2">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-sm font-bold text-slate-800 truncate">{item.title}</p>
                <p className="text-xs text-blue-600 font-bold">{item.currency} {item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetails;