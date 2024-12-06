"use client"

import { CiSearch } from "react-icons/ci";
import { useState, FormEvent, ChangeEvent, memo } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(search == "") {
            return alert("Please enter a search term")
        }
        router.push("/search/" + search)
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="relative w-2/5 px-2 md:w-fit">
            <input 
                type="text" 
                value={search}
                onChange={handleInput}
                placeholder="Search something" 
                className="border w-full border-black rounded-md px-2 py-1 pr-6"
                aria-label="Search input"
            />
            <button 
                type="submit" 
                className="absolute right-3 top-2 text-xl"
                aria-label="Submit search"
            >
                <CiSearch />
            </button>
        </form>
    )
}

export default memo(SearchInput)
