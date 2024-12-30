import { getAnimeBySlug } from "@/app/lib/anime-apis";
import Image from "next/image";

interface AnimeProps {
  readonly slug: string | undefined;
}

export default async function Anime(props: AnimeProps) {
  const anime = await getAnimeBySlug(props.slug);
  const orignalPosterImageSrc: string =
    anime?.images.originalPosterImage === undefined
      ? ""
      : anime?.images.originalPosterImage;
  return (
    <div className="mt-10 flex justify-start">
      <div className="mx-10 w-1/3 flex justify-center">
        <Image
          src={orignalPosterImageSrc}
          alt={`poster image for ${anime?.name}`}
          height={650}
          width={500}
        />
      </div>
      <div className="flex-row w-2/3">
        <div className="text-5xl my-2">{anime?.name}</div>
        <div className="my-2">
          <span className="text-xl">Synopsis</span>
          <hr className="my-1"></hr>
          {anime?.synopsis}
        </div>
        <div className="flex my-2">
          <div>Genres : </div>
          <hr></hr>
          {anime?.genres?.map((genre, index) => {
            return (
              <div className="self-center	mx-1" key={genre}>
                {anime.genres?.length !== index + 1 && genre + ","}
                {anime.genres?.length === index + 1 && genre}
              </div>
            );
          })}
        </div>
        <div className="flex my-2 ">
          <div>Number of Episodes :</div>
          <div className="mx-1 self-center">{anime?.episodeCount}</div>
        </div>
        <div className="flex my-2 ">
          <div>Trailer : </div>
          <a
            href={"https://www.youtube.com/watch?v=" + anime?.youtubeVideoId}
            className="mx-1 text-sky-400 self-center"
            target="_blank"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
}
