// Navbar.jsx
import React from 'react';

const Navbar = ({ changeLanguage }) => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <div className="flex mr-4">
            <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-gray-950 text-white">English</button>
            <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-gray-950 text-white">Español</button>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 1-lg border-none w-full bg-gray-100"
          />
        </div>
        <button className="block sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;