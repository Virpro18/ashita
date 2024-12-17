import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const UserLink: React.FC<{ isOpen: boolean; path: string }> = ({
  isOpen,
  path,
}) => {

  return (
    <Link
      href="/user/dashboard"
      className={`fixed bottom-6 flex gap-2 cursor-pointer p-2 transition-all ${
        isOpen ? "w-10/12 " : ""
      }${path.startsWith("/user") ?  "bg-blue-500 text-white scale-110 rounded-xl" : ""}`}
    >
      <FaRegUserCircle className="text-2xl"/>
      {isOpen && <span>User</span>}
    </Link>
  );
};

export default UserLink;
