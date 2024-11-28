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
        } md:hidden top-0`}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={`md:relative overflow-y-auto fixed w-60 p-4 mr-2 bg-blue-500 md:h-full h-screen top-0 z-20 transition-transform transform md:translate-x-0 ${
          open ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <div></div>
      </div>
      <div className="fixed md:hidden top-4 left-4 cursor-pointer scale-125">
        <button onClick={() => setOpen(!open)}>
          <BsBoxArrowRight />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
