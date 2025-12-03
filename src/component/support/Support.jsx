import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex items-center">
      <div className="max-w-6xl mx-auto p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/yn2BTNj1/adult-couple-with-laptop-computer-bed-470178-5654.jpg"
            alt="Support Illustration"
            className="w-full h-full max-w-md  rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6"> <span className="text-pink-500">S</span>upports</h2>

          <p className="text-lg mb-4">
            FAQ, Tutorials, and Live Chat support coming soon.
          </p>
          <p className="text-lg mb-6">
            Reach out to our team for quick and friendly assistance.
          </p>

          {/* Button → Contact Page */}
          <Link to="/contact">
        <button
  className="px-6 py-3 bg-gradient-to-r from-black to-pink-500 
             text-white rounded-lg shadow hover:opacity-90 transition">
  Contact Support
</button>

          </Link>
        </div>

      </div>
    </section>
  );
};

export default Support;
