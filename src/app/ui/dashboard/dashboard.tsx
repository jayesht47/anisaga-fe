"use client";
import { isLoggedIn } from "@/app/lib/actions";
import { getLikedAnimes } from "@/app/lib/anime-apis";
import { AuthContext } from "@/app/lib/auth-provider";
import { useContext, useEffect, useState } from "react";
import Card from "../card";
import { Anime } from "@/app/lib/definitions";

export default function Dashboard() {
  const { authState, setAuthState } = useContext(AuthContext);
  const [likedAnimes, setLikedAnimes] = useState<[Anime] | undefined>(
    undefined
  );

  useEffect(() => {
    const updateAuthState = async () => {
      setAuthState(await isLoggedIn());
    };
    const setAnimeLikes = async () => {
      setLikedAnimes(await getLikedAnimes());
    };
    updateAuthState();
    if (authState) setAnimeLikes();
  }, [authState, setAuthState]);

  return (
    <div className="m-10">
      <div className="text-2xl">My Likes</div>
      <div className="flex flex-wrap justify-center">
        {authState &&
          likedAnimes?.map((item, index) => (
            <Card key={`card-${index.toString()}`} anime={item} />
          ))}
      </div>
    </div>
  );
}
