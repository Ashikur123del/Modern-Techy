import { Suspense } from "react";
import { Spinner } from "@heroui/react";
import TilesCard from "./TilesCard";

const TilesList = async () => {
  const res = await fetch("https://modern-techy.vercel.app/db.json", {
    cache: "no-store",
  });
  const tilesData = await res.json();
  const tiles = tilesData.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiles.map((tile) => (
        <TilesCard tile={tile} key={tile.id} />
      ))}
    </div>
  );
};

const TilesCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center font-bold text-3xl md:text-5xl my-10 uppercase tracking-tighter">
        Our Premium <span className="text-blue-600">Tiles</span>
      </h2>

      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-2">
            <Spinner size="xl" color="primary" />
            <span className="text-xs text-blue-600 font-medium uppercase tracking-widest">
              Loading Premium Tiles...
            </span>
          </div>
        }
      >
        <TilesList />
      </Suspense>
    </div>
  );
};

export default TilesCards;
