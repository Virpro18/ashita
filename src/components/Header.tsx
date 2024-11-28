import Link from "next/link";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-2 h-auto bg-blue-500">
      <div className="w-5 h-3 md:hidden"></div>
      <Link href="/">
        <h1 className="md:text-2xl text-xl font-bold cursor-pointer">okok</h1>
      </Link>
      <div className="w-3 h-3 md:hidden"></div>
      <SearchInput />
    </header>
  );
};

export default Header;
