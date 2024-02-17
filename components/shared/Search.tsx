import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="flex items-center relative">
      <MagnifyingGlassIcon className="absolute left-4 w-6 h-6 -mr-4 text-gray-400" />
      <input
        type="text"
        className="bg-gray-100 rounded-md py-2 lg:w-72 pl-12 focus:outline-primary-400 text-gray-600"
        placeholder="Search..."
      />
    </div>
  );
};
export default Search;
