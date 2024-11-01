"use client";

import Link from "next/link";
import Button from "../header/button";

import { login } from "@/app/lib/actions";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, action] = useActionState(login, undefined);
  return (
    <form className="flex w-full" action={action}>
      <div className="w-3/12 p-4 rounded-xl m-auto mt-20 bg-[#191919] shadow-blue-500/50">
        <h1 className="text-3xl text-center mb-10 antialiased">Welcome back</h1>
        <div className="text-center">
          Dont have an account?{" "}
          <Link href={"/signup"} className="text-teal-600">
            Sign up
          </Link>
        </div>
        <div className="w-full text-center my-5 text-xl">
          <input
            type="text"
            alt="input to enter username"
            id="userName"
            name="userName"
            placeholder="enter your username"
            className="rounded-lg p-2 text-black w-11/12 bg-[#121212] text-white"
            required
          />
          {state?.errors?.userName && <p>{state.errors.userName}</p>}
        </div>
        <div className="w-full text-center my-5 text-xl ">
          <input
            type="password"
            alt="input to enter password"
            id="password"
            name="password"
            placeholder="enter your password"
            className="rounded-lg p-2 text-black w-11/12 bg-[#121212] text-white"
            required
          />
          {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>
        <div className="w-full text-center text-xl">
          <Button className="align-center p-3 h-auto" type="submit">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
