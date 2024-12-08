// pages/about-us.tsx
import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-8 bg-gray-100">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-sm text-gray-600 mt-2">Home /Pages/ About Us</p>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about-us-image.jpg"
            alt="About our Ecommerce Business"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are committed to providing the best shopping experience with
            quality products, fast delivery, and excellent customer service.
            Learn more about our history and how we’ve grown over the years.
          </p>
          <a
            href="#"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature Card */}
            {[
              { title: "Free Delivery", icon: "🚚" },
              { title: "Win Cash Back", icon: "💸" },
              { title: "Quality Product", icon: "✔️" },
              { title: "24/7 Support", icon: "📞" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Client Say!</h2>
          <blockquote className="bg-white rounded-lg shadow-lg p-8 italic">
            <p className="text-lg text-gray-700">
            &quotI have had an amazing experience shopping with this platform.
              Their customer service is top-notch, and the products are
              always of excellent quality. Highly recommended! &quot
            </p>
            <footer className="mt-4 text-gray-600">- Saba Qamar</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
