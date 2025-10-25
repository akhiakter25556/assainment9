

// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import skillsData from "../data/skills.json"; // তোমার JSON ডাটা
import { Star } from "lucide-react";

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 mt-20 space-y-16">
      {/* ✅ HERO SLIDER */}
      <section className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {skills.slice(0, 6).map((skill, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[60vh] flex items-center justify-center">
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center text-white z-10 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    Master {skill.skillName} Today!
                  </h1>
                  <Link
                    to={`/skill/${skill.id}`}
                    className="bg-green-600 px-6 py-3 rounded-lg
                     text-lg font-medium hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ✅ POPULAR SKILLS SECTION */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Popular <span className="text-indigo-600">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white shadow rounded-lg p-4 flex
               flex-col hover:shadow-lg transition"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 text-lg font-bold">{skill.skillName}</h3>
              <p className="flex items-center gap-1 text-yellow-500">
                <Star size={16} /> {skill.rating}
              </p>
              <p className="text-gray-700">Price: ${skill.price}</p>
              <Link
                to={`/skill/${skill.id}`}
                className="mt-auto bg-indigo-600 text-white px-3 py-2
                rounded text-center hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ TOP RATED PROVIDERS */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Top Rated <span className="text-indigo-600">Providers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "John Doe",
              image: "https://i.ibb.co/ym8g18fG/download-3.jpg",
              rating: 4.9,
              skill: "Web Design",
            },
            {
              name: "Sarah Smith",
              image: "https://i.ibb.co/JRwjhvMy/download-2.jpg",
              rating: 4.8,
              skill: "Graphic Design",
            },
            {
              name: "David Wilson",
              image: "https://i.ibb.co/KQ2QJ1F/download.jpg",
              rating: 5.0,
              skill: "React Development",
            },
          ].map((provider) => (
            <div
              key={provider.name}
              className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-indigo-500"
              />
              <h3 className="mt-3 font-semibold text-lg">{provider.name}</h3>
              <p className="text-gray-500">{provider.skill}</p>
              <p className="text-yellow-500 font-medium mt-1">
                ⭐ {provider.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ HOW IT WORKS SECTION */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">
          How It <span className="text-indigo-600">Works</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">1️⃣ Post Your Skill</h3>
            <p className="text-gray-600">
              Showcase your expertise to find the right match for skill exchange.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">2️⃣ Connect & Chat</h3>
            <p className="text-gray-600">
              Interact with other learners and professionals in real time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">3️⃣ Learn & Grow</h3>
            <p className="text-gray-600">
              Exchange knowledge and improve your skills with confidence!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
