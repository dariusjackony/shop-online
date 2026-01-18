import LOGO from "../assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStore, FaUser, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <div>
          <img src={LOGO} className="w-20" />
        </div>
        {/* search bar */}
        <div className="hidden md:block lg:block">
           <SearchBar />
        </div>
        <div className="hidden md:flex space-x-8 md:mr-10">
          <Link to="" className="flex gap-2">
            <FaStore className="text-2xl text-gray-700" />
            Shops
          </Link>
          <Link to="" className="flex gap-2">
            <FaStore className="text-2xl text-gray-700" />
             MyShop
          </Link>
          <Link to="" className="flex gap-2">
            <FaUser className="text-2xl text-gray-700" />
            Account
          </Link>
          <Link to="" className="flex gap-2">
            <FaShoppingCart className="text-2xl text-gray-700"/>
             Cart
          </Link>
        </div>
        
        {/* Mobile Icons */}
        <div className="md:hidden lg:hidden flex gap-5">
          <Link to="" className="flex gap-2">
            <FaStore className="text-xl text-gray-500" />
            Shop
          </Link>
          <Link to="" className="flex gap-2">
            <FaUser className="text-xl text-gray-500" />
          </Link>
          <Link to="" className="flex gap-2">
            <FaShoppingCart className="text-xl text-gray-500"/>
          </Link>
        </div>
      </div>
    </nav>
    <div className="lg:hidden md:hidden">
      <SearchBar className="w-full"/>
    </div>
    </div>
  );
}
