import Link from "next/link";
import { BsBoxArrowRight } from "react-icons/bs";

const ToggleButton: React.FC<{ onClick: () => void; isOpen: boolean }> = ({
    onClick,
    isOpen,
  }) => (
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
export default ToggleButton