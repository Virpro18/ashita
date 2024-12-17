"use client";

import { useState, memo } from "react";
import { usePathname } from "next/navigation";

import { IoMdHome } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import MobileOverlay from "./Sidebar/MobileOverlay";
import SidebarContent from "./Sidebar/SidebarContent";
import ToggleButton from "./Sidebar/ToogleButton";
// import { verifyToken } from "@/utils/joseAuth";

// Types and interfaces
export type Navigation = {
  name: string;
  icon: JSX.Element;
  href: string;
};

interface Props {
  isFull: boolean;
}

// Component
const Sidebar: React.FC<Props> =({ isFull }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname()

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const savedState = sessionStorage.getItem("sidebarOpen") === "true";
  //   setIsOpen(savedState);
  // }, []);

  const navigation: Navigation[] = [
    { name: "Home", icon: <IoMdHome />, href: "/" },
    {
      name: "Your's Project",
      icon: <CiCirclePlus className="text-xl" />,
      href: "/user/project",
    },
  ];

  const sidebarWidth = isFull ? "w-0 opacity-0" : "w-18";

  return (
    <>
      <MobileOverlay isOpen={isOpen} onClose={toggleSidebar} />
      <SidebarContent
        isOpen={isOpen}
        width={sidebarWidth}
        navigation={navigation}
        path={pathname}
      />
      <ToggleButton onClick={toggleSidebar} isOpen={isOpen} />
    </>
  );
};

// Subcomponents






export default memo(Sidebar);
