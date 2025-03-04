"use client";
import { isLoggedIn } from "@/app/lib/actions";
import {
    addToLikes,
    checkIfLiked,
    removeFromLikes,
} from "@/app/lib/anime-apis";
import { AuthContext } from "@/app/lib/auth-provider";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function Like() {
    const [isLiked, setIsLiked] = useState(false);
    const { authState, setAuthState } = useContext(AuthContext);
    const pathname: string = usePathname();
    const slug: string = pathname.split("/")[2];

    useEffect(() => {
        const getIsLiked = async () => {
            setIsLiked(await checkIfLiked(slug));
        };
        const updateAuthState = async () => {
            setAuthState(await isLoggedIn());
        };
        getIsLiked();
        updateAuthState();
    });
    const likeClickHandler = async () => {
        if (!isLiked) setIsLiked(await addToLikes(slug));
        else setIsLiked(!(await removeFromLikes(slug)));
    };

    return (
        <>
            {authState && !isLiked && (
                <IoHeartOutline
                    className="ml-5 hover:cursor-pointer"
                    onClick={likeClickHandler}
                />
            )}
            {authState && isLiked && (
                <IoHeartSharp
                    className="ml-5 hover:cursor-pointer"
                    onClick={likeClickHandler}
                />
            )}
        </>
    );
}
