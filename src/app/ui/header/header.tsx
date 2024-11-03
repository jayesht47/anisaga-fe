"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import { logout } from "@/app/lib/actions";

export default function Header() {
  const router = useRouter();

  const loginClickHandler = () => {
    router.push("/login");
  };

  const signupClickHandler = () => {
    router.push("/signup");
  };

  const logoutClickHandler = () => {
    logout();
  };

  return (
    <header>
      <div className="flex justify-between">
        <div className="justify-self-start m-6 text-5xl ">AniSaga</div>
        <div className="justify-self-end">
          <Button
            className="m-6 text-2xl"
            type="button"
            onClick={signupClickHandler}
          >
            Sign up
          </Button>
          <Button
            className="m-6 text-2xl"
            type="button"
            onClick={loginClickHandler}
          >
            Login
          </Button>
          <Button
            className="m-6 text-2xl"
            type="button"
            onClick={logoutClickHandler}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
