import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair1.png", // Replace with actual image paths
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair2.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair3.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair4.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ width: "270px", height: "361px" }}
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;