import Image from "next/image";
const ProductGrid = () => {
    const products = [
      {
        image: "/3.png",
        name: "Cantilever Chair",
        code: "Y523201",
        price: "$42.00",
      },
      {
        image: "/4.png",
        name: "Cantilever Chair",
        code: "Y523201",
        price: "$42.00",
      },
      {
        image: "/5.png",
        name: "Cantilever Chair",
        code: "Y523201",
        price: "$42.00",
      },
      {
        image: "/6.png",
        name: "Cantilever Chair",
        code: "Y523201" ,
        price: "$42.00",
      },
    ];
  
    return (
      <div className="bg-gray-50 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#1A0B5B]">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-4 hover:bg-[#2F1AC4] hover:text-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center h-64 bg-[#F6F7FB]">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full hover:text-white flex items-center justify-center group-hover:border-[#1A0B5B] border-2">
                {/* <button className="px-4 py-2 bg-green-500 text-white rounded">
                  View Details
                </button> */}
              </div>
              <div className="mt-4 text-center hover:text-white">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 hover:text-white">
                  Code - {product.code}
                </p>
                <p className="text-lg font-bold text-gray-900 hover:text-white">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductGrid;