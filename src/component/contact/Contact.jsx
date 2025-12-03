import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50
     via-white to-pink-50 px-6 md:px-16 py-20">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Get In <span className="text-pink-300">Touch</span>
      </h2>

      {/* Contact Card */}
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl 
        border border-gray-200/60 rounded-2xl p-8 md:p-10">

        <form className="flex flex-col gap-6">
          
          <div>
            <label className="font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-indigo-400 outline-none transition shadow-sm"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-indigo-400 outline-none transition shadow-sm"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm"
            ></textarea>
          </div>

          <button
            className="bg-gradient-to-r from-black to-pink-500  py-3 rounded-lg font-semibold 
            hover:bg-pink-300 
             text-white  transition-all 
            shadow-md hover:shadow-xl active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="text-center mt-10 text-gray-700">
        <p>📍 Dhaka, Bangladesh</p>
        <p>📞 +880 1234-567890</p>
        <p>✉️ support@example.com</p>
      </div>
    </section>
  );
};

export default Contact;
