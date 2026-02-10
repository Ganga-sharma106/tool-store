import Checkout from "./Checkout";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-6 ">
      <h2 className="text-lg font-bold">Cart</h2>

      {cart.map((item, i) => (
        <p key={i}>
          {item.title.slice(0, 25)} – ₹{item.price}
        </p>
      ))}

      <p className="font-semibold mt-2">Total: ₹{total}</p>

      {cart.length > 0 && <Checkout totalAmount={total} />}
    </div>
  );
};

export default Cart;
