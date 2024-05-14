import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-700 p-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center">
            <div className="flex mr-4">
              <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-blue-500 text-white">English</button>
              <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-green-500 text-white">Español</button>
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 rounded-lg border-none w-full bg-gray-100"
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
      <div className="flex-1 bg-gray-50">
        <div className="p-4">
          <ul className="flex justify-end mt-4 sm:mt-0">
            <li className="mr-6">
              <a href="#" className="text-black">{t('home')}</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-black">{t('moreAboutme')}</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-black">{t('Skills')}</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-black">{t('Projects')}</a>
            </li>
            <li>
              <a href="#" className="text-black">{t('contact')}</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-full h-auto bg-gray-950 p-36">
          <div className="flex flex-col md:flex-row items-center"> 
            <div className="md:w-1/2 md:pr-16">
              <h1 className="text-5xl font-bold text-white">{t('welcomeMessage')}</h1>
              <div className="flex justify-center mt-8"> 
                <button className="bg-gray-500 hover:bg-gray-500 text-white text-3xl font-bold py-16 px-16 rounded-full">{t('moreAboutMe')}</button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8"> 
              <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2496782.jpg?w=1900&h=1265" alt="yo" className="w-148 h-148 rounded-full" />
            </div>
          </div>
        </div>
        <div className="p-96 bg-gray-900 sm:bg-gray-900 flex-1">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('newContent')}</h2>
          <p className="text-white">{t('newContentDescription')}</p>
        </div>
      </div>
      <footer className="bg-gray-700 p-16 text-center text-white">
        <a href="#" className="text-white">{t('contact')}</a>
      </footer>
    </div>
  );
}

export default App;
