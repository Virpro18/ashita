"use client";

import Link from "next/link";
import { useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";


interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Navigation {
  name: string;
  icon: JSX.Element;
  href: string;
}

interface SidebarContentProps {
  isOpen: boolean;
  widht: string;
  navigation: Navigation[];
}

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

interface Props {
  isFull: boolean;
}

const Sidebar: React.FC<Props> = ({ isFull }) => {
  let DeskW = "w-18";
  if (isFull) {
    DeskW = "w-0 opacity-0";
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => setIsOpen(!isOpen);

  const navigation: Navigation[] = [
    {
      name: "Home",
      icon: <IoMdHome />,
      href: "/",
    },
    {
      name: "Add",
      icon: <CiCirclePlus />,
      href: "/Add",
    },
  ];

  return (
    <>
      <MobileOverlay isOpen={isOpen} onClose={toggleSidebar} />
      <SidebarContent isOpen={isOpen} widht={DeskW} navigation={navigation} />
      <ToggleButton onClick={toggleSidebar} isOpen={isOpen} />
    </>
  );
};

const MobileOverlay: React.FC<MobileOverlayProps> = ({ isOpen, onClose }) => (
  <div
    className={`fixed bg-black bg-opacity-40 z-10 w-screen h-screen transition-opacity duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    } md:hidden top-0`}
    onClick={onClose}
  ></div>
);

const SidebarContent: React.FC<SidebarContentProps> = ({
  isOpen,
  widht,
  navigation,
}) => (
  <div
    className={`md:relative overflow-y-auto fixed bg-white p-4 mr-2 md:h-full h-screen top-0 z-20 transition-all duration-300 ease-in-out 
      transform md:translate-x-0 
      ${isOpen ? "w-60" : `${widht}`}
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    style={{ visibility: isOpen || widht !== "w-0" ? "visible" : "hidden" }}
  >
    <nav
      className={`flex flex-col ${!isOpen ? `items-center` : null} relative`}
    >
      {navigation.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`flex items-center gap-2 my-2 hover:bg-black hover:bg-opacity-30 rounded-md w-full ${
            isOpen ? "p-2" : "p-3   flex-col"
          } transition-colors`}
        >
          <span>{item.icon}</span>
          <span className={`md:inline ${isOpen ? null : "text-sm"}`}>
            {item.name}
          </span>
        </Link>
      ))}
      <Link href="/user/dashboard" className={`fixed bottom-6 flex gap-2 cursor-pointer p-2 ${isOpen ? 'w-10/12':null}`}>
        <FaRegUserCircle className="text-2xl"></FaRegUserCircle>
        {isOpen ? <span>User</span> : null}
      </Link>
    </nav>
  </div>
);

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, isOpen }) => (
  <div className="fixed flex md:top-2 top-3 md:left-10 sm:left-7 left-5 items-center gap-2 scale-125">
    <button
      onClick={onClick}
      className="hover:bg-opacity-50 hover:text-color-last p-1 md:text-xl text-base rounded-md transition-colors"
    >
      <BsBoxArrowRight
        className={`transform ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>
    <Link href="/">
      <h1 className="md:text-2xl sm:text-xl text-base font-bold cursor-pointer text-color-secondary hover:text-color-last transition-colors">
        New World
      </h1>
    </Link>
  </div>
);

export default Sidebar;
