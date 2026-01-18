
export default function SearchBar(){
    return(
        <div className="relative w-full px-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search for product"
              className="w-86   md:w-96 lg:w-[650px] p-2 pl-10 rounded-lg border border-gray-300 bg-gray-50
                        placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-md cursor-pointer bg-blue-700 text-white">
              Search
            </button>
       </div>

    )
}