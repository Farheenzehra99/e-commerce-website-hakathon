import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/images/blog1.png",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/images/blog2.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/images/blog3.png",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md p-4"
            style={{ width: "300px", height: "420px" }}
          >
            <Image src={post.imgSrc} alt={post.title} className="h-40 w-full object-cover rounded-md" />
            <div className="mt-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <button className="text-blue-500 underline mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;