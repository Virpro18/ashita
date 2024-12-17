import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "../Sidebar";

const NavItem: React.FC<{ item: Navigation; isOpen: boolean, path:string }> = ({
    item,
    isOpen,
  }) => {
    const pathname = usePathname(); // Get current path
  
    const isActive = pathname === item.href;
  
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-2 my-2 rounded-md w-full ${
          isOpen ? "p-2" : "p-3 flex-col"
        } transition-colors ${
          isActive
            ? "bg-blue-500 text-white scale-110"
            : "hover:bg-black hover:bg-opacity-30"
        }`}
      >
        <span>{item.icon}</span>
        <span
          className={`md:inline ${
            isOpen ? "" : "text-sm max-w-min"
          } break-words leading-tight`}
        >
          {item.name}
        </span>
      </Link>
    );
  };

  export default NavItem;