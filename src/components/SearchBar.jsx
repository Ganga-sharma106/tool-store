
const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 rounded w-full md:w-1/2"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
