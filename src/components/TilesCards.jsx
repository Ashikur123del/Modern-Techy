import TilesCard from "./TilesCard";

const TilesCards = async () => {
  const res = await fetch('https://modern-techy.vercel.app/db.json', { cache: 'no-store' });
  const tilesData = await res.json();
  const tiles = tilesData.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center font-bold text-3xl md:text-5xl my-10 uppercase tracking-tighter">
        Our Premium <span className="text-blue-600">Tiles</span>
      </h2>
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map(tile => (
          <TilesCard tile={tile} key={tile.id} />
        ))}
      </div>
    </div>
  );
};

export default TilesCards;