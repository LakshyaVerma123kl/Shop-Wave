import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Layout = ({ children, cartItemCount }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/">
            <h1 className="text-3xl font-bold">Shop Wave</h1>
          </Link>
          <nav className="space-x-6">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-yellow-300 transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-lg font-semibold hover:text-yellow-300 transition"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative inline-flex items-center text-lg font-semibold hover:text-yellow-300 transition"
            >
              <FaShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-green-900 text-white p-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Shop Wave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
