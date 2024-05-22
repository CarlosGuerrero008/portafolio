import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ changeLanguage, t, scrollToFooter={scrollToFooter} }) => {
  const location = useLocation();

  const handleContactClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      scrollToFooter();
    }
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center">
          <div className="flex mr-4">
            <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-gray-700 text-white">English</button>
            <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-gray-700 text-white">Español</button>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 lg border-none w-full bg-gray-200"
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
      <div className="flex justify-end"> {/* Utilizando justify-end para alinear a la derecha */}
        <div className="p-4">
          <ul className="flex">
            <li className="mr-8">
              <Link to="/" className="text-xl text-black hover:text-gray-700">{t('home')}</Link>
            </li>
            <li className="mr-8">
              <Link to="/about" className="text-xl text-black hover:text-gray-700">{t('moreAboutMe')}</Link>
            </li>
            <li className="mr-8">
              <Link to="/skills" className="text-xl text-black hover:text-gray-700">{t('Skills')}</Link>
            </li>
            <li className="mr-8">
              <Link to="/projects" className="text-xl text-black hover:text-gray-700">{t('Projects')}</Link>
            </li>
            <li>
              <a href="#footer" onClick={handleContactClick} className="text-xl text-black hover:text-gray-700">{t('contact')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
