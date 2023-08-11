import { data } from "../context";
import { useState, useContext } from "react";


export default function Search() {
    const {searchTerm} = useContext(data)
    const { setSearchTerm } = useContext(data)
    console.log(searchTerm)

    return (
        <>
            <div className="flex-grow flex flex-col md:flex-row items-center justify-between w-full">
                <div className="flex-grow mb-4 md:mb-0 relative w-full md:w-auto">
                    <input
                        type="text"
                        className="py-2 px-4 pr-10 border border-transparent focus:outline-none focus:bg-gray-50 focus:border-indigo-500 rounded-md w-full"
                        placeholder="Search..."
                        onChange={(e) => {setSearchTerm(e.target.value)}}
                        value={searchTerm}
                    />
                </div>
            </div> 
        </>
    ); 
}










