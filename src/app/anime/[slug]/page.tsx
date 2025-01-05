import Anime from "@/app/ui/anime/anime";
import { headers } from "next/headers";

export default async function Page() {
  const headerList = await headers();
  console.log(headerList);
  const currentPathName = headerList.get("x-current-path");
  console.log(`currentPathName is ${currentPathName}`);
  const slug = currentPathName?.split("/")[2];
  return <Anime slug={slug} />;
}
