import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

// Map product ids to image paths
const imagePaths = {
  1: "/path/to/image1.jpg", // Replace with actual image paths or URLs
  2: "/path/to/image2.jpg",
  3: "/path/to/image3.jpg",
};

const ShoppingCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: (newCart[index].quantity || 1) + 1,
    };
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index] = {
        ...newCart[index],
        quantity: (newCart[index].quantity || 1) - 1,
      };
      setCart(newCart);
    }
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalCost = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  console.log("Cart:", cart); // Debugging log

  return (
    <Layout cartItemCount={cart.length}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cart.length === 0 ? (
              <p className="text-gray-700">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b py-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image || imagePaths[item.id]} // Use item image or default path
                          alt={item.title}
                          className="w-16 h-16 object-cover mr-4"
                        />
                        <div>
                          <h2 className="text-lg font-semibold">
                            {item.title}
                          </h2>
                          <p className="text-gray-700">
                            ₹{item.price.toLocaleString()}
                          </p>
                          <p className="text-gray-700">
                            Quantity: {item.quantity || 1}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="px-3 py-1 text-lg bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                          -
                        </button>
                        <button
                          onClick={() => increaseQuantity(index)}
                          className="px-3 py-1 text-lg bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(index)}
                          className="px-3 py-1 text-lg bg-gray-500 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-lg font-semibold">
                    Total Cost: ₹{totalCost.toLocaleString()}
                  </p>
                  <button
                    onClick={clearCart}
                    className="px-6 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="flex justify-between">
                  <Link
                    to="/products"
                    className="text-center text-lg font-semibold bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Continue Shopping
                  </Link>
                  <Link to="/checkout">
                    <button
                      onClick={() => alert("You have checked out!")}
                      className="text-center text-lg font-semibold bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
