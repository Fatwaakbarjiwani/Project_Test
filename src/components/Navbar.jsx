import nav from "../assets/iconNav.svg";
import downNav from "../assets/downNav.svg";
import { useEffect, useState } from "react";
import { dataCard } from "../data/dataCard";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVillaOpen, setIsVillaOpen] = useState(false);

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
        <div className="flex w-1/4 space-x-8 items-center gap-2 relative">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <img src={nav} alt="logo" />
          </button>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="hidden cursor-pointer sm:flex items-center gap-4"
          >
            <h1 className="text-lg">Villa Category</h1>
            <img src={downNav} className="pt-1" alt="down" />
          </div>
        </div>
        <div
          className={`max-w-[40%] sm:max-w-sm w-full bg-white p-2 sm:p-4 shadow-lg ${
            isOpen ? "absolute top-20 left-[10%]" : "hidden"
          }`}
        >
          <div className="space-y-0">
            <button
              onClick={() => {
                setIsOpen(false);
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full text-sm sm:text-base text-left py-3 px-4 text-black hover:bg-gray-50 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => setIsVillaOpen(!isVillaOpen)}
              className="w-full text-sm sm:text-base relative border-y-2 border-gray-200 text-left py-3 px-4 text-black hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
            >
              <span>Villa Category</span>
              <p>{`>`}</p>
              {/* bagian 2 */}
              <div
                className={`absolute top-0 -right-[110%] bg-white w-full h-full ${
                  isVillaOpen ? "block" : "hidden"
                }`}
              >
                {dataCard.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsOpen(false);
                      setIsVillaOpen(false);
                      document
                        .getElementById("villa-studios")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-white border-y border-gray-200 text-left py-3 px-4 text-black hover:bg-gray-50 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full text-sm sm:text-base text-left py-3 px-4 text-black hover:bg-gray-50 transition-colors duration-200"
            >
              Gallery
            </button>
          </div>
        </div>
        <div className="hidden sm:flex w-1/4 justify-between items-center gap-2">
          <button>Contact us</button>
          <button className="bg-primary p-2 w-1/2">Login</button>
        </div>
      </div>
    </div>
  );
}
