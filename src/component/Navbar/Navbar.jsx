import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { HiMenu, HiX } from "react-icons/hi";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-300 text-white sticky top-0 z-50 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img
            src="https://i.ibb.co/1GJJDhS1/download.png"
            alt="Logo"
            className="h-12 rounded-3xl"
          />
          SkillHub
        </Link>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu for medium+ screens */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          <NavLink to="/all-items" className="hover:text-gray-200">All Items</NavLink>
          <NavLink to="/about" className="hover:text-gray-200">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-gray-200">Contact</NavLink>
          <NavLink to="/support" className="hover:text-gray-200">Support</NavLink>

          {!user && (
            <>
              <NavLink to="/login" className="hover:text-gray-200">Login</NavLink>
              <NavLink to="/register" className="hover:text-gray-200">Register</NavLink>
            </>
          )}

          {user && (
            <button
              onClick={logout}
              className="bg-white text-pink-300 px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-300 px-6 py-4 space-y-3">
          <NavLink to="/" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/all-items" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>All Items</NavLink>
          <NavLink to="/about" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/support" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Support</NavLink>

          {!user && (
            <>
              <NavLink to="/login" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Login</NavLink>
              <NavLink to="/register" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Register</NavLink>
            </>
          )}

          {user && (
       <button
  onClick={() => { logout(); setIsOpen(false); }}
  className="w-full bg-white text-pink-300 px-3 py-1 rounded-lg hover:bg-gray-100"
>
  Logout
</button>

          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
