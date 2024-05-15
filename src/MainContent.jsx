import React from 'react';


const MainContent = ({ t, profileImage, ArrowRight }) => {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-4">
        <ul className="flex justify-end mt-4 sm:mt-0">
          {/* Otros elementos del menú */}
          <li className="mr-16">
            <a href="#" className="text-2xl text-black">{t('home')}</a>
          </li>
          <li className="mr-16">
            <a href="#" className="text-2xl text-black">{t('moreAboutMe')}</a>
          </li>
          <li className="mr-16">
            <a href="#" className="text-2xl text-black">{t('Skills')}</a>
          </li>
          <li className="mr-16">
            <a href="#" className="text-2xl text-black">{t('Projects')}</a>
          </li>
          <li>
            <a href="#" className="text-2xl text-black">{t('contact')}</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-full h-auto bg-gray-950 p-32">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 lg:w-2/3 md:pr-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-8 welcome-message">
              <span className="text-8xl">{t('hello')}</span> {t('welcomeMessage').slice(7)}
            </h1>
            <div className="flex justify-end mt-8">
              {/* Botón con icono */}
              <button className="bg-gray-500 hover:bg-gray-500 text-black text-3xl font-bold py-8 px-12 rounded-lg flex items-center">
                <span>{t('moreAboutMe')}</span>
                <img src={ArrowRight} alt="Angle Right Icon" className="ml-2 w-12 h-12" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 flex justify-center md:justify-start mt-8 md:mt-0">
            <img src={profileImage} alt="yo" className="w-96 h-96 lg:w-128 lg:h-128 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;


