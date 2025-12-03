import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-pink-200 text-black-200">
      {/* Logo */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <img
  src="https://i.ibb.co/1GJJDhS1/download.png"
  alt="Logo"
  className="h-12 mb-4 md:mb-0 rounded-3xl"
/>

        <div className="flex gap-4">
          <a href="#" className="hover:text-green-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-400"><FaTwitter /></a>
          <a href="#" className="hover:text-green-400"><FaInstagram /></a>
          <a href="#" className="hover:text-green-400"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>📍 123 Web Street, Dhaka, Bangladesh | 📞 +880 1234-567890 | ✉️ info@example.com</p>
        <div className="mt-2 md:mt-0 flex gap-2">
          <a href="#" className="hover:text-white">Privacy Policy</a> |
          <a href="#" className="hover:text-white">Terms of Service</a> |
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>

      {/* Optional Purchase / Promo Section */}
      <div className="container mx-auto px-4 py-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Create Stunning Website Now!</h2>
        <p className="mb-4">Purchase Gardon WordPress Theme</p>
        <a href="https://i.ibb.co/1GJJDhS1/download.png"
         target="_blank" rel="noopener noreferrer">
          <button className="btn rounded-xl bg-gradient-to-r from-black
           to-pink-500  text-white px-6 py-2
           hover:bg-pink-500 transition">
            Purchase Theme
          </button>
        </a>
      </div>
    </footer>
  );
}
