
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />
      <h2 className="font-semibold mt-2 text-sm">
        {product.title.slice(0, 40)}
      </h2>
      <p className="text-green-600 font-bold">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
