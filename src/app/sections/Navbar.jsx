import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ changeLanguage, scrollToFooter }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      scrollToFooter();
    }
    setMenuOpen(false); 
  };

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center">
          <div className="flex mr-4">
            <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-gray-700 text-white">English</button>
            <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-gray-700 text-white">Español</button>
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left sm:ml-8">
          <h1 className="text-2xl font-bold whitespace-nowrap">PORTAFOLIO</h1>
        </div>
        <button className="block sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
      <div className="hidden sm:flex justify-end">
        <div className="p-4">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-xl text-black hover:text-gray-700">{t('home')}</Link>
            </li>
            <li>
              <Link to="/about" className="text-xl text-black hover:text-gray-700">{t('moreAboutMe')}</Link>
            </li>
            <li>
              <Link to="/skills" className="text-xl text-black hover:text-gray-700">{t('Skills')}</Link>
            </li>
            <li>
              <Link to="/projects" className="text-xl text-black hover:text-gray-700">{t('Projects')}</Link>
            </li>
            <li>
              <a href="#footer" onClick={handleContactClick} className="text-xl text-black hover:text-gray-700">{t('contact')}</a>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden mt-2 bg-gray-100"> 
          <ul className="p-4 space-y-4">
            <li>
              <Link to="/" onClick={handleLinkClick} className="text-xl text-black hover:text-gray-700">{t('home')}</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick} className="text-xl text-black hover:text-gray-700">{t('moreAboutMe')}</Link>
            </li>
            <li>
              <Link to="/skills" onClick={handleLinkClick} className="text-xl text-black hover:text-gray-700">{t('Skills')}</Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick} className="text-xl text-black hover:text-gray-700">{t('Projects')}</Link>
            </li>
            <li>
              <a href="#footer" onClick={handleContactClick} className="text-xl text-black hover:text-gray-700">{t('contact')}</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
