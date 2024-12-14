// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// function Hero() {
//   const router = useRouter();

//   return (
//     <div className="relative w-full bg-[#F3F3F3] overflow-hidden flex flex-col md:flex-row items-center justify-between">

//       {/* Left Section for Mobile & Desktop */}
//       <div className="w-full md:w-1/2 h-full flex flex-col md:flex-row items-center justify-start pl-6 md:pl-16 relative">

//         {/* Bulb Image */}
// <div className="relative md:absolute top-[-30px] left-[-30px] md:left-[-100px]">
//   <Image src="/images/bulb.png" alt="Bulb" width={300} height={300} className="object-contain" />
// </div>

//         {/* Text Content - Aligning next to the bulb */}
//         <div className="relative mt-6 md:mt-0 md:ml-6 text-center md:text-left">
//           {/* Pink Text */}
//           <p className="text-[#FB2E86] text-lg md:text-xl font-normal mb-2">
//             Best Furniture For Your Castle...
//           </p>

//           {/* Bold Heading */}
//           <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-4">
//             New Furniture Collection Trends in 2020
//           </h1>

//           {/* Description */}
//           <p className="text-sm md:text-lg text-gray-600 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
//             phasellus non in justo.
//           </p>

//           {/* Shop Now Button */}
//           <Link href="/shoplist">
//             <button className="px-6 py-2 bg-[#FB2E86] text-white font-text rounded-md shadow-md hover:bg-pink-600">
//               Shop Now
//             </button>
//           </Link>
//         </div>

//       </div>

//       {/* Right Section (Desktop, Mobile - Scrollable) */}
//       <div className="w-full md:w-1/2 h-full relative flex flex-col items-center justify-start">

//         {/* Pink Background Image */}
//         <div
//           className="absolute top-[60px] w-[380px] md:w-[450px] h-[380px] md:h-[450px] bg-cover bg-center z-0"
//           style={{ backgroundImage: 'url(/images/pink.png)' }}
//         ></div>

//         {/* Sofa Image */}
//         <div className="relative z-10 mt-[80px] mb-[20px]">
//           <Image src="/images/sofa.png" alt="Sofa" width={350} height={250} className="object-contain" />
//         </div>

//         {/* Blue Discount Badge */}
//         <div
//           className="absolute top-[40px] right-[75px] bg-cover bg-center w-[80px] h-[80px] flex flex-col justify-center items-center z-20"
//           style={{ backgroundImage: 'url(/images/discount.png)' }}
//         >
//           <span className="text-xl font-bold text-white">50%</span>
//           <span className="text-sm font-semibold text-white">OFF</span>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Hero;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa.png", // Replace with the correct path
    lampImage: "/images/bulb.png", // Replace with the correct path
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa.png", // Replace with another chair image
    lampImage: "/images/bulb.png", // Replace with another lamp image
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa.png", // Replace with another chair image
    lampImage: "/images/bulb.png", // Replace with another lamp image
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20  flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-350px] left-[-40px] z-10">
          <Image
            src={"/images/bulb.png"}
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          {current.title}
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {current.description}
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={"/images/sofa.png"}
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
        {/* Blue Discount Badge */}
        <div
          className="absolute top-[40px] right-[75px] bg-cover bg-center w-[80px] h-[80px] flex flex-col justify-center items-center z-20"
          style={{ backgroundImage: "url(/images/discount.png)" }}
        >
          <span className="text-xl font-bold text-white">50%</span>
          <span className="text-sm font-semibold text-white">OFF</span>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-pink-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❯
      </button>
    </section>
  );
}

export default HeroSection;
