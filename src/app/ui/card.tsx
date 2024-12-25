import Image from "next/image";
import { Anime } from "../lib/definitions";

interface CardProps {
  readonly anime: Anime;
}

export default function Card(props: CardProps) {
  const anime = props.anime;
  return (
    <div className="m-3">
      <Image height={500}  width={300} src={anime.posterImage} alt={`poster image for ${anime.slug}`} />
      <div>{anime?.name}</div>
    </div>
  );
}
