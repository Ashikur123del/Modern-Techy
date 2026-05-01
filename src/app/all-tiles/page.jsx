import AllTilesHero from "@/components/AllTilesHero";
import Card from "@/components/Card";

const AllTiles = async () => {
  let allTiles = [];

  try {
    const res = await fetch('https://modern-techy.vercel.app/db.json', {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    allTiles = Array.isArray(data) ? data : (data.tiles || []);

  } catch (error) {
    console.error("Fetch Error:", error);
    return (
      <div className="container mx-auto p-10 text-center text-red-500 font-bold">
        Failed to load tiles. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 lg:px-10">
      <AllTilesHero />

      {allTiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {allTiles.map((tile) => (
            <Card key={tile.id} item={tile} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500 italic">
          No tiles found at the moment.
        </div>
      )}
    </div>
  );
};

export default AllTiles;