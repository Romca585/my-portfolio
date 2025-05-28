import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Roman.dev</h1>
        <nav className="space-x-6 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          {/* Add more links if you add more pages */}
        </nav>
      </div>
    </header>
  );
}

export default Header;