"use client"
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className=" 2xl:w-[1920px] w-[100%] border-b-2 bg-neutral-100">
      <div className=" flex items-center justify-center bg-white h-[70px]">
        {/* Main content container */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          
          {/* Logo */}
          <Image
            src="/images/Hekto.png"
            width={98}
            height={34}
            alt="logo"
          />

          {/* nav links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-indigo-100 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >           
          <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black ">
             
              <li className="p-4 text-[#0D0E43]  hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/pages">Pages</Link>
              </li>
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/products">Products</Link>
              </li>
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Search and toggle button */}
          <div className="flex gap-x-4 items-center">
            {/* Search bar for lg screens */}
            <div className="hidden lg:flex w-[317px] bg-gray-200 rounded-md items-center">
              <input
                className="w-[270px] h-8 p-1 bg-white border-2 border-[#E7E6EF] outline-none"
                type="search"
                placeholder="Search"
              />
              <CiSearch
                className="text-xl w-[48px] h-[30px] bg-[#FB2E86] text-[#F3F9FF]"
              />
            </div>

          

            <button
      className="text-black text-3xl md:hidden ml-32 sm:block z-50 b"
      onClick={toggle}
    >
      {open ? "✖" : "☰" }
    </button>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;