import Image from "next/image";
export default function Home() {
    const products = [
      { id: 7, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
      { id: 8, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
      { id: 9, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
      { id: 10, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
      { id: 11 , name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
      { id: 12, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
    ];
  
    const ProductCard = ({ image, name, price, oldPrice }: ProductCardProps) => {
      return (
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-360 h-270 mx-auto">
            <Image
              src={image}
              alt={name}
              className="w-full h-250 object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">{price}</span>
              <span className="text-gray-400 line-through">{oldPrice}</span>
            </div>
          </div>
        </div>
      );
    };
  
    interface ProductCardProps {
      image: string;
      name: string;
      price: string;
      oldPrice: string;
    }
  
    return (
      <div className="container mx-auto px-4 py-8" style={{ backgroundColor: "white" }}>
        <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>
        <div className="flex justify-center space-x-8  text-[#151875]">
          <a href="#" className="text-[#FB4997] font-semibold">
            New Arrival
          </a>
          <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
          <a href="#" className="hover:text-[#FB4997]">Featured</a>
          <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={`/${product.id}.png`}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
      </div>
    );
  }
  