import React from "react";
import { Link } from "react-router-dom";
import plantImage from "./assets/background.jpg";
import Layout from "./Layout";

const LandingPage = () => {
  return (
    <Layout>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plantImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Discover Your Choice
          </h2>
          <p className="text-xl mb-8">
            At ShopWave, we’re dedicated to enhancing your shopping experience
            with a diverse selection of top-notch products. Dive into our
            extensive collection of stylish home essentials, cutting-edge
            gadgets, and unique finds. Whether you’re a savvy shopper or
            discovering new trends, we have everything you need to elevate your
            lifestyle and make every day a little brighter. Explore ShopWave and
            ride the wave of exceptional deals and premium quality!
          </p>
          <Link
            to="/products"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
          >
            Shop Now
          </Link>
        </main>
      </div>
    </Layout>
  );
};

export default LandingPage;
