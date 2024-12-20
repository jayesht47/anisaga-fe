"use server";

import { Anime } from "./definitions";


export const getTrendingAnimeList = async () =>{
    try{
        const hostname: string | undefined = process.env.SERVER_URL;
        if (hostname == undefined) throw new Error("server url not configured!");
        const trendingAnimeListpath = "/anime/trending";
        const trendingAnimeListUrl = hostname ? hostname + trendingAnimeListpath : "";
        const headers: Headers = new Headers();
        headers.set("Content-Type", "application/json");
        const response = await fetch(trendingAnimeListUrl, {
            method: "GET",
            headers: headers,
        });
        if (response.status != 200) {
            const respObj = await response.json();
            console.error(
            `receieved status ${
                response.status
            } for getTrendingAnimeList, response json was ${JSON.stringify(respObj)}`
            );
        }
        
        if (response.status === 200) {
        const respObj: [Anime] = await response.json();
        return respObj;
        }
    }catch(e){
        console.error(`Exception occurred in getTrendingAnimeList ${e}`)
    }
}