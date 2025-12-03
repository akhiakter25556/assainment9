import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import skillsData from "../data/skills.json";

export default function LandingPage() {
  return (
    <div className="space-y-20">

      {/* ✅ Hero / Carousel Section */}
      <section className="h-[70vh] relative">
        <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
          {skillsData.map((skill) => (
            <SwiperSlide key={skill.id}>
              <div className="relative h-full w-full">
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="object-cover w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col 
                justify-center items-center text-white">
                  <h1 className="text-4xl font-bold mb-4">{skill.skillName}</h1>
                  <Link
                    to={`/skill/${skill.id}`}
                    className="bg-pink-300 px-6 py-3 rounded-lg
                     hover:bg-pink-200 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ✅ All Items Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          All <span className="text-indigo-600">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg flex flex-col h-full"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="rounded h-40 object-cover mb-2"
              />
              <h3 className="font-semibold">{skill.skillName}</h3>
              <p className="text-gray-600 text-sm mb-2">Short description here</p>
              <Link
                to={`/skill/${skill.id}`}
                className="mt-auto bg-indigo-600 text-white py-2 text-center
                 rounded hover:bg-indigo-700 transition"
              >
                See More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Top-Rated Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Top Rated <span className="text-indigo-600">Providers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example provider cards */}
        </div>
      </section>

      {/* ✅ Additional Sections */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>
        {/* Categories cards */}
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Blog & Articles</h2>
        {/* Blog cards */}
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Promotions & Offers</h2>
        {/* Offer banners */}
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Newsletter</h2>
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input type="email" placeholder="Enter your email" className="input input-bordered" />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </section>

    </div>
  );
}
