import { IoSearchOutline } from "react-icons/io5";

export default function Page() {
    return (
        <div className="flex flex-col justify-self-center m-6">
            <div className="text-3xl mr-6">Search AniSaga Database</div>
            <div className="flex  mt-5">
                <input
                    type="text"
                    className="text-3xl text-black rounded p-2 w-[60vw] self-center mr-5"
                    aria-label="search"
                />
                <div className="w-[5vw] self-center">
                    <IoSearchOutline size={40} className="hover:cursor-pointer" />
                </div>
            </div>
        </div>
    );
}