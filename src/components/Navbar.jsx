
const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Tool Store</h1>
      <span>Cart ({cartCount})</span>
    </nav>
  );
};

export default Navbar;
