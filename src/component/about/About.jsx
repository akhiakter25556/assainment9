import React from "react";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-12 md:px-16 bg-gray-50 text-gray-800">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        About <span className="text-pink-400">Us</span>
      </h2>

      {/* Intro */}
      <p className="text-base md:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        We are committed to delivering high-quality digital solutions with
        modern, scalable, and responsive design. Our focus is to help
        individuals and businesses grow with clean UI, smooth UX, and
        reliable performance.
      </p>

      {/* Mission / Vision / Values Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Mission */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="text-primary text-5xl mb-4 flex justify-center">
            <FaBullseye />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-2">Our Mission</h3>
          <p className="text-center text-gray-600 text-sm md:text-base">
            To provide reliable and user-friendly digital experiences that
            empower users and help them achieve their goals effortlessly.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="text-primary text-5xl mb-4 flex justify-center">
            <FaEye />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-2">Our Vision</h3>
          <p className="text-center text-gray-600 text-sm md:text-base">
            To become a leading digital service provider known for innovation,
            customer satisfaction, and high-performance products.
          </p>
        </div>

        {/* Values */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="text-primary text-5xl mb-4 flex justify-center">
            <FaHandshake />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-2">Our Values</h3>
          <p className="text-center text-gray-600 text-sm md:text-base">
            We prioritize honesty, creativity, teamwork, and continuous
            improvement in everything we build.
          </p>
        </div>

      </div>
{/* Team Section */}
<div className="max-w-5xl mx-auto mt-20 px-4">


  {/* Text Left & Image Right */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Text Section */}
    <div className="text-gray-600 text-sm md:text-lg leading-relaxed">
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
    Our <span className="text-pink-400">Team</span>
  </h3>

      <p>
        Our dedicated team consists of experienced designers, developers,
        and strategists working together to create smooth and powerful
        digital experiences for our clients.
      </p>
    </div>

    {/* Image Section (Right Side) */}
    <div className="flex justify-end">
      <img
        src="https://i.ibb.co/bRFNrtMV/essoas-pc-computer-students-images-11563196701oycbvnterj.png"
        alt="Team Photo"
        className="w-full md:w-[85%] rounded-xl shadow-lg object-cover"
      />
    </div>
  </div>
</div>




    </section>
  );
};

export default About;
