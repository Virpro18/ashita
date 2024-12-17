import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";

// import { cookies } from "next/headers";

const UserLink: React.FC<{ isOpen: boolean; path: string }> = ({
  isOpen,
  path,
}) => {
  const [name,setName] = useState<string|boolean>("")

  useEffect(() => {
    const name = document.cookie
    .split("; ")
    .find(row => row.startsWith("user="))
    ?.split("=")[1]
    setName( name ?? false)
  
    console.log(name)
  },[name])

  // const cookiees = await cookies()
  // console.log(cookiees)
  return (
    <Link
      href="/user/dashboard"
      className={`fixed bottom-6 flex gap-2 cursor-pointer p-2 transition-all items-center ${
        isOpen ? "w-10/12 " : ""
      }${path.startsWith("/user") ?  "bg-blue-500 text-white scale-110 rounded-xl" : ""}`}
    >
      <FaRegUserCircle className="text-2xl"/>
      {isOpen && <LoginButton name={name}/>}
    </Link>
  );
};

export default UserLink;
