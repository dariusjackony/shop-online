
export default function SearchBar(){
    return(
        <div className="relative w-full">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    🔍
  </span>

  <input
    type="text"
    placeholder="Search for product"
    className="w-full p-2 pl-10 rounded-lg border border-gray-300 bg-gray-50
               placeholder-gray-400 focus:outline-none focus:ring-2
               focus:ring-blue-500 focus:border-blue-500"
  />
</div>

    )
}