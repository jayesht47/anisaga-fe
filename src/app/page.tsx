import { getTrendingAnimeList } from "./lib/anime-apis";
import Card from "./ui/card";

export default async function Page() {
  const animeList = await getTrendingAnimeList();

  return (
    <main>
      {
        <div className="">
          <h1>Trending Anime</h1>
          <div className="flex">
            {animeList?.map((item, index) => (
              <Card key={`card-${index.toString()}`} anime={item} />
            ))}
          </div>
        </div>
      }
    </main>
  );
}
