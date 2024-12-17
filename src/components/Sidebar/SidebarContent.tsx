import { Navigation } from "../Sidebar";
import NavItem from "./NavItem";
import UserLink from "./UserLink";

const SidebarContent: React.FC<{
  isOpen: boolean;
  path: string;
  width: string;
  navigation: Navigation[];
}> = ({ isOpen, width, navigation, path }) => {
  console.log(isOpen)
  return (
    <div
      className={`md:relative overflow-y-auto fixed bg-white p-4 mr-2 md:h-full h-screen top-0 z-20 transition-all duration-300 ease-in-out 
        transform md:translate-x-0 
        ${isOpen ? "w-60" : width}
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      style={{ visibility: isOpen || width !== "w-0" ? "visible" : "hidden" }}
    >
      <nav
        className={`flex flex-col ${!isOpen ? "items-center" : ""} relative`}
      >
        {navigation.map((item, index) => (
          <NavItem key={index} item={item} isOpen={isOpen} path={path} />
        ))}
        <UserLink isOpen={isOpen} path={path} />
      </nav>
    </div>
  );
};

export default SidebarContent;
