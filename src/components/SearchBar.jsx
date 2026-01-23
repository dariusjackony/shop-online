import { FaSearch } from "react-icons/fa";

export default function SearchBar(){
    return(
        <div className="relative w-full px-2">
            <input
              type="text"
              placeholder="Search for product..."
              className="w-86   md:w-96 lg:w-[650px] p-2 pl-4 rounded-lg border border-gray-300 bg-gray-50
                        placeholder-gray-400 focus:outline-none"
            />
            
            <div className="absolute right-3 lg:right-3 top-1/2 -translate-y-1/2 bg-blue-700 p-2.5 rounded-lg cursor-pointer">
                <FaSearch className=" text-white" />
            </div>
       </div>

    )
}