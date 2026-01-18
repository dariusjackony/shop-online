import LOGO from "../assets/logo.jpg";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <div>
          <img src={LOGO} className="w-25" />
        </div>
        <div>
          <input type="text" placeholder="search for product" className="w-40 p-1 rounded-lg mr-3" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>

        <button className="md:hidden text-xl bg-gray-900 text-white p-1 rounded-lg" onClick={() => setOpen(!open)}>
          {open ? "X" : "☰"}
        </button>
      </div>

      {open && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
