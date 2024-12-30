import { getTrendingAnimeList } from "./lib/anime-apis";
import Card from "./ui/card";

export default async function Page() {
  const animeList = await getTrendingAnimeList();

  return (
    <main>
      {
        <div className="flex-row">
          <h1 className="text-3xl flex justify-center mb-5">Currently Trending Anime</h1>
          <div className="flex flex-wrap justify-center">
            {animeList?.map((item, index) => (
              <Card key={`card-${index.toString()}`} anime={item} />
            ))}
          </div>
        </div>
      }
    </main>
  );
}
