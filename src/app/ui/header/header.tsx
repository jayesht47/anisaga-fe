"use client";

import { useRouter } from "next/navigation";
import Button from "./button";

export default function Header() {
  const router = useRouter();

  const loginClickHandler = () => {
    router.push("/login");
  };

  return (
    <header>
      <div className="flex justify-between">
        <div className="justify-self-start m-6 text-5xl ">AniSaga</div>
        <div className="justify-self-end">
          <Button className="m-6 text-2xl" type="button">
            Sign up
          </Button>
          <Button
            className="m-6 text-2xl"
            type="button"
            onClick={loginClickHandler}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
