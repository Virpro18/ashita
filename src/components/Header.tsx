import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-2 h-auto bg-white">
      <div className="w-5 h-3"></div>
      <div className="w-3 h-3 md:hidden"></div>
      <SearchInput />
    </header>
  );
};

export default Header;
