import { getTrendingAnimeList } from "./lib/anime-apis";

export default function Page() {

    const animeList = getTrendingAnimeList();

    return <main>This is main</main>;
}
