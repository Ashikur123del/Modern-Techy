import AllTilesHero from "@/components/AllTilesHero";
import Card from "@/components/Card"; 

const AllTiles = async () => {
  const res = await fetch('https://modern-techy.vercel.app/db.json', { cache: 'no-store'});
  const allTiles = await res.json(); 
  
  return (
    <div className="container mx-auto p-4">
      <AllTilesHero />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {
          allTiles?.map((tile) => (
           
            <Card key={tile.id} item={tile}  />
          ))
        }
      </div>
    </div>
  );
};

export default AllTiles;