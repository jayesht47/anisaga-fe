"use client";

import { signup } from "@/app/lib/actions";
import Button from "../header/button";
import { useActionState } from "react";
import Link from "next/link";

export default function SignupForm() {
  console.log(
    `typeof window === 'undefined' is ${typeof window === "undefined"}`
  );
  const [state, action] = useActionState(signup, undefined);
  return (
    <form className="flex w-full" action={action}>
      <div className="w-3/12 p-4 rounded-xl m-auto mt-20 bg-[#191919] shadow-blue-500/50">
        <h1 className="text-3xl text-center mb-10 antialiased">Sign up</h1>
        <div className="text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-teal-600">
            Login
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
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
