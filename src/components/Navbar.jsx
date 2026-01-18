import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-black">
            MyNGO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="">Home</a>
            </div>
            <a href="#" className="text-gray-700 ">
              News
            </a>
            <a href="#" className="text-gray-700 ">
              Work With Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none font-bold text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
    </nav>
  );
}
