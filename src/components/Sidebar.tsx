"use client";

import { useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";


const Sidebar = () => {
  const [open, setOpen] = useState(Boolean);
  console.log(open);

  return (
    <>
      <div
        className={`fixed bg-black bg-opacity-40 z-10 w-screen h-screen ${
          open ? `block` : `hidden`
        } md:hidden`}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={`md:relative fixed w-60 p-4 mr-2 bg-blue-500 h-screen bg-opacity-90 z-20 transition-transform transform md:translate-x-0 ${
          open ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <div></div>
      </div>
      <div className="fixed md:hidden top-3 left-4 cursor-pointer scale-125">
        <button onClick={() => setOpen(!open)} ><BsBoxArrowRight/></button>
      </div>
    </>
  );
};

export default Sidebar;
