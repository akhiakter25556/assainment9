


// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import { useAuth } from "../AuthProvider/AuthProvider.jsx";

// export default function Navbar() {
//   const { user, logOut } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       alert("Logged out successfully!");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           Skill<span className="text-gray-800">Swap</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-medium"
//                 : "text-gray-700 hover:text-indigo-600 transition"
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-medium"
//                 : "text-gray-700 hover:text-indigo-600 transition"
//             }
//           >
//             My Profile
//           </NavLink>

//           {/* Avatar */}
//           {user && (
//             <div className="relative group">
//               {user.photoURL ? (
//                 <img
//                   src={user.photoURL}
//                   alt="User"
//                   className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
//                 />
//               ) : (
//                 <FaUserCircle className="w-10 h-10 text-gray-600" />
//               )}
//               <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
//                bg-gray-800 text-white text-sm px-2 py-1 rounded 
//                opacity-0 group-hover:opacity-100 transition">
//                 {user.displayName || "No Name"}
//               </span>
//             </div>
//           )}

//           {/* Auth Buttons */}
//           <div className="space-x-4">
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="bg-indigo-600 text-white px-4 py-2 
//                 rounded-md hover:bg-indigo-700 transition"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="bg-indigo-600 text-white px-4 py-2
//                    rounded-md hover:bg-indigo-700 transition"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="border border-indigo-600
//                    text-indigo-600 px-4 py-2 rounded-md
//                     hover:bg-indigo-50 transition"
//                 >
//                   Signup
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 text-2xl"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           ☰
//         </button>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../AuthProvider/AuthProvider.jsx";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* ✅ Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Skill<span className="text-gray-800">Swap</span>
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-medium"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-medium"
                : "text-gray-700 hover:text-indigo-600 transition"
            }
          >
            My Profile
          </NavLink>

          {/* ✅ Avatar */}
          {user && (
            <div className="relative group">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-600" />
              )}
              <span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
               bg-gray-800 text-white text-sm px-2 py-1 rounded 
               opacity-0 group-hover:opacity-100 transition"
              >
                {user.displayName || "No Name"}
              </span>
            </div>
          )}

          {/* ✅ Auth Buttons */}
          <div className="space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-2 
                rounded-md hover:bg-indigo-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-indigo-600 text-white px-4 py-2
                   rounded-md hover:bg-indigo-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="border border-indigo-600
                   text-indigo-600 px-4 py-2 rounded-md
                    hover:bg-indigo-50 transition"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner flex flex-col items-center space-y-4 py-4 animate-slideDown">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            My Profile
          </NavLink>

          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}




