import { FaHome, FaStore, FaShoppingCart, FaUser } from "react-icons/fa";
export default function Tabs(){
    return(
        <section className="bg-black shadow-md p-4 w-full bottom-0 fixed lg:hidden md:hidden">
            <div className="flex justify-between px-4 text-white text-2xl">
                <div>
                    {/*Home*/}
                    <FaHome />
                </div>
                <div>
                    {/*Shops*/}
                    <FaStore />
                </div>
                <div>
                    {/*Cart */}
                    <FaShoppingCart />
                </div>
                <div>
                    {/*Profile */}
                    <FaUser />
                </div>
            </div>
        </section>
    )
}