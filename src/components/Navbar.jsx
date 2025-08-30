import nav from "../assets/iconNav.svg";
import downNav from "../assets/downNav.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <div className="fixed top-0 w-full z-50 text-white">
    <div
      className={`fixed z-50 w-full text-white transition-all duration-300 ${
        scrollY > 50
          ? "bg-primary/40 shadow-md backdrop-blur-lg"
          : "bg-transparent shadow-md"
      }`}
    >
      <div className="flex font-[400] max-w-primary sm:mx-auto mx-4 py-6 justify-between items-center">
        <div className="flex w-1/4 space-x-8 items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={nav} alt="logo" />
          </button>
          <div className="hidden sm:flex items-center gap-4">
            <h1 className="text-lg">Villa Category</h1>
            <img src={downNav} className="pt-1" alt="down" />
          </div>
        </div>
        <div className="hidden sm:flex w-1/4 justify-between items-center gap-2">
          <button>Contact us</button>
          <button className="bg-primary p-2 w-1/2">Login</button>
        </div>
      </div>
      {/* <div className="">
        <div className="flex flex-col gap-4">
          <button>Contact us</button>
          <button className="bg-primary p-2 w-1/2">Login</button>
        </div>
      </div> */}
    </div>
  );
}
