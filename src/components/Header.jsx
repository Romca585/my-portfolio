import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#171717] px-6 py-4 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        <h1 className="px-7 text-2xl font-bold text-green-400">Roman.dev</h1>
        <nav className="px-7 space-x-6 text-m text-green-200">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/" className="hover:text-white transition">About Me</Link>
          <Link to="/" className="hover:text-white transition">My Files</Link>
          <Link to="/" className="hover:text-white transition">Contact Me</Link>
          {/* Add more links if you add more pages */}
        </nav>
      </div>
    </header>
  );
}

export default Header;