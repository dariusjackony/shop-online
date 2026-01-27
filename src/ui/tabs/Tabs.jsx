import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaStore, FaShoppingCart, FaUser } from "react-icons/fa";
export default function Tabs(){
    return(
        <section className="bg-black shadow-md p-4 w-full bottom-0 fixed lg:hidden md:hidden">
            <div className="flex justify-between px-4 text-white text-2xl">
            
                <NavLink to="/"
                 className={({isActive}) => ` ${isActive ? "text-blue-700" : "text-white"}`}
                >
                    <FaHome />
                </NavLink>
                    
                <NavLink to="/shop"
                 className={({isActive}) => ` ${isActive ? "text-blue-700" : "text-white"}`}
                >
                    <FaStore />
                </NavLink>
                <NavLink>
                    <FaShoppingCart />
                </NavLink>
                <NavLink>
                    <FaUser />
                </NavLink>
            </div>
        </section>
    )
}