
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ totalAmount }) => {
  const [method, setMethod] = useState("");
  const [upi, setUpi] = useState("");
  const [bank, setBank] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate(); 

  const handlePayment = () => {
    if (!method) {
      toast.error("Please select a payment method!");
      return;
    }

    if (method === "UPI" && !upi) {
      toast.error("Please enter your UPI ID!");
      return;
    }

    if (method === "NetBanking" && !bank) {
      toast.error("Please enter Bank Name!");
      return;
    }

    if (!phone) {
      toast.error("Please enter your phone number!");
      return;
    }

   
    toast.success(`Payment of ₹${totalAmount} successful!`, {
      position: "top-center",
      autoClose: 2500, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

   
    setMethod("");
    setUpi("");
    setBank("");
    setPhone("");

   
    setTimeout(() => {
      navigate("/"); 
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Checkout / Payment
      </h2>

      <label className="block mb-2 font-medium text-gray-700">
        Payment Method:
      </label>
      <select
        className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="">--Select Method--</option>
        <option value="UPI">UPI</option>
        <option value="NetBanking">Net Banking</option>
      </select>

      {method === "UPI" && (
        <input
          type="text"
          placeholder="Enter UPI ID (example@upi)"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
        />
      )}

      {method === "NetBanking" && (
        <input
          type="text"
          placeholder="Enter Bank Name"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
      )}

      <input
        type="tel"
        placeholder="Enter your phone number"
        className="border border-gray-300 rounded-lg p-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      
      <button
        onClick={handlePayment}
        className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-3 px-10 rounded-xl shadow-lg hover:from-green-600 hover:to-green-800 transition-all block mx-auto"
      >
        Pay ₹{totalAmount}
      </button>

      <p className="text-center mt-4 text-gray-500 text-sm">
        Secure payment. No real transactions in demo.
      </p>

      
      <ToastContainer />
    </div>
  );
};

export default Checkout;
