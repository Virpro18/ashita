import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    return (
        <form className="relative w-2/5 md:w-fit">
            <input type="text" name="" id="" placeholder="Search something" className="border w-full border-black rounded-md px-2 py-1 pr-6"/>
            <button className="absolute right-1 top-2 text-xl"><CiSearch /></button>
        </form>
    )
}

export default SearchInput