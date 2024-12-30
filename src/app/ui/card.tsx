"use client";

import Image from "next/image";
import { Anime } from "../lib/definitions";
import { useRouter } from "next/navigation";

interface CardProps {
  readonly anime: Anime;
}

export default function Card(props: CardProps) {
  const anime = props.anime;
  const router = useRouter();

  return (
    <div className="p-3 justify-self-center">
      <Image
        height={500}
        width={300}
        src={anime.images.largePosterImage}
        alt={`poster image for ${anime.slug}`}
        onClick={() => router.push(`/anime/${anime.slug}`)}
        className="hover:cursor-pointer"
      />
      <div
        className="text-center pt-5 text-lg hover:cursor-pointer"
        onClick={() => router.push(`/anime/${anime.slug}`)}
      >
        {anime?.name}
      </div>
    </div>
  );
}
