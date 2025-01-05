"use client";
import {
  addToLikes,
  checkIfLiked,
  removeFromLikes,
} from "@/app/lib/anime-apis";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function Like() {
  const [isLiked, setIsLiked] = useState(false);
  const pathname: string = usePathname();
  const slug: string = pathname.split("/")[2];

  useEffect(() => {
    const getIsLiked = async () => {
      setIsLiked(await checkIfLiked(slug));
    };
    getIsLiked();
  });
  const likeClickHandler = async () => {
    if (!isLiked) setIsLiked(await addToLikes(slug));
    else setIsLiked(!(await removeFromLikes(slug)));
  };

  return (
    <>
      {!isLiked && (
        <IoHeartOutline
          className="ml-5 hover:cursor-pointer"
          onClick={likeClickHandler}
        />
      )}
      {isLiked && (
        <IoHeartSharp
          className="ml-5 hover:cursor-pointer"
          onClick={likeClickHandler}
        />
      )}
    </>
  );
}
