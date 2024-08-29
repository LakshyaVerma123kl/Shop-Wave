import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("You have checked out successfully!");
    navigate("/");
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>
          <p className="text-gray-700 mb-6">
            Click the button below to complete your purchase.
          </p>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
