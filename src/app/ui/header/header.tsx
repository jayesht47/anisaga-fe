"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import { logout } from "@/app/lib/actions";
import { useContext } from "react";
import { AuthContext } from "@/app/lib/auth-provider";

export default function Header() {
  const router = useRouter();
  const { authState } = useContext(AuthContext);

  const loginClickHandler = () => {
    router.push("/login");
  };

  const signupClickHandler = () => {
    router.push("/signup");
  };

  const logoutClickHandler = () => {
    logout();
  };

  const logoClickHandler = () => {
    router.refresh();
    router.push("/");
  };

  return (
    <header>
      <div className="flex justify-between">
        <div
          className="justify-self-start m-6 text-5xl select-none hover:cursor-pointer"
          onClick={logoClickHandler}
        >
          AniSaga
        </div>
        <div className="justify-self-end">
          {!authState && (
            <Button
              className="m-6 text-2xl"
              type="button"
              onClick={signupClickHandler}
            >
              Sign up
            </Button>
          )}
          {!authState && (
            <Button
              className="m-6 text-2xl"
              type="button"
              onClick={loginClickHandler}
            >
              Login
            </Button>
          )}
          {authState && (
            <Button
              className="m-6 text-2xl"
              type="button"
              onClick={logoutClickHandler}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
