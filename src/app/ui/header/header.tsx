"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import { isLoggedIn, logout } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
    const router = useRouter();
    const [authState, setAuthState] = useState(false);

    useEffect(() => {
        const updateAuthState = async () => {
            setAuthState(await isLoggedIn());
        };
        updateAuthState();
    });

    const loginClickHandler = () => {
        router.push("/login");
    };

    const DashboardClickHandler = () => {
        router.push("/dashboard");
    };

    const signupClickHandler = () => {
        router.push("/signup");
    };

    const logoutClickHandler = () => {
        logout();
    };

    const logoClickHandler = () => {
        router.push("/");
    };

    const searchClickHandler = () => {
        router.push("/search");
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
                <div className="justify-self-end flex ">
                    <IoSearchOutline
                        size={35}
                        className="m-6 self-center hover:cursor-pointer"
                        onClick={searchClickHandler}
                    />
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
                            onClick={DashboardClickHandler}
                        >
                            Dashboard
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
