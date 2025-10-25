
// export default function Footer() {
//   return (
 
// <div
//   className="hero min-h-screen"
//   style={{
//     backgroundImage:
//       "url(https://i.ibb.co/m52wHJ0X/b-Ovf94d-PRx-Wu0u3-Qs-Pj-F-tree.jpg)",
//   }}
// >
//   <div className="hero-overlay"></div>
//   <div className="hero-content text-neutral-content text-center">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">  Create Stunning Website Now!</h1>
//       <p className="mb-5">
//        Purchase Gardon WordPress Theme
//       </p>
//       <button className="btn rounded-xl bg-green-800">Purchase Theme</button>
//     </div>
//   </div>
// </div>

//   );
// }
export default function Footer() {
  return (
    <footer className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/Nh3x72W/544800.jpgjpg"
        alt="Background"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Create Stunning Website Now!
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6 drop-shadow">
          © {new Date().getFullYear()} Purchase Gardon WordPress Theme.
        </p>

        {/* ✅ Purchase Button */}
        <a
          href="https://i.ibb.co/5hH60wG0/photo-1600577916048-804c9191e36c.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn rounded-xl bg-green-800 text-white px-8 py-3 hover:bg-green-700 transition">
            Purchase Theme
          </button>
        </a>
      </div>

      {/* Footer Info Section */}
      <div className="absolute bottom-0 w-full bg-black/70
       text-gray-200 py-6 text-center">
        <div className="container mx-auto px-4">
          {/* Contact Info */}
          <p className="mb-2">
            📍 123 Web Street, Dhaka, Bangladesh | 📞 +880 1234-567890 | ✉️ info@example.com
          </p>

          {/* Social Links */}
          <div className="mb-2">
            <a href="#" className="hover:text-green-400 mx-2">Facebook</a>
            <a href="#" className="hover:text-green-400 mx-2">Twitter</a>
            <a href="#" className="hover:text-green-400 mx-2">Instagram</a>
            <a href="#" className="hover:text-green-400 mx-2">LinkedIn</a>
          </div>

          {/* Privacy Policy */}
          <div className="text-sm text-gray-400">
            <a href="#" className="hover:text-white mx-2">Privacy Policy</a>|
            <a href="#" className="hover:text-white mx-2"> Terms of Service</a>|
            <a href="#" className="hover:text-white mx-2"> Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


