import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import skillsData from "../../data/skills.json"; 

export default function AllItems() {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    setItems(skillsData);
  }, []);

  // Sorting function
  const sortedItems = [...items]
    .filter(item => filterCategory === "All" || item.category === filterCategory)
    .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  // Unique categories for filter dropdown
  const categories = ["All", ...new Set(skillsData.map(item => item.category))];

  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Filter & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="input input-bordered"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="input input-bordered"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {sortedItems.map(item => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col hover:shadow-lg transition"
          >
          <img
  src={
    item.id === 1
      ? "https://i.ibb.co/xSmp3YnV/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit-158538-8052.jpg"
      : item.id === 2
      ? "https://i.ibb.co/Mkbrn9f5/depositphotos-398339806-stock-photo-happy-man-with-laptop-working.webp"
      : "https://i.ibb.co/PzYRBM5Y/images.jpg"
  }
  alt={item.skillName}
  className="w-full h-40 object-cover rounded mb-2"
/>

            <h3 className="font-semibold text-lg">{item.skillName}</h3>
            <p className="text-gray-700">Price: ${item.price}</p>
            <p className="text-yellow-500">Rating: {item.rating}</p>

            <Link
              to={`/skill/${item.id}`}
              className="mt-auto bg-gradient-to-r from-black to-pink-500  text-white text-center
               px-3 py-2 rounded  transition"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
