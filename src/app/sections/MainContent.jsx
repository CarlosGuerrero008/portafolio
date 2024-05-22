import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

const CombinedContent = ({ t, profileImage, ArrowRight, bxlPython, bxlhtml, bxlMysql, filetypeJava, filetypePy, filetypeSql }) => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-auto bg-gray-950 p-32">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 lg:w-2/3 md:pr-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-8 welcome-message">
              <span className="text-8xl">{t('hello')}</span> {t('welcomeMessage').slice(7)}
            </h1>
            <div className="flex justify-end mt-8">
              {/* Botón con icono */}
              <button className="bg-gray-500 hover:bg-gray-500 text-black text-3xl font-bold py-8 px-12 rounded-lg flex items-center">
                <Link to="/about" className="flex items-center"> {/* Cambié el link a /projects */}
                  <span>{t('moreAboutMe')}</span>
                  <img src={ArrowRight} alt="Angle Right Icon" className="ml-2 w-12 h-12" />
                </Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 flex justify-center md:justify-start mt-8 md:mt-0">
            <img src={profileImage} alt="yo" className="w-96 h-96 lg:w-128 lg:h-128 rounded-full object-cover" />
          </div>
        </div>
      </div>

      {/* Nueva sección */}
      <div className="py-8 md:py-8 bg-gray-900 flex-1">
        {/* Iconos y botones */}
        <div className="flex flex-col md:flex-row justify-between items-center md:justify-between md:items-start space-y-5 md:space-y-0 md:space-x-5">
          {/* Sección Python */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-500 hover:bg-gray-500 text-black text-3xl font-bold py-6 px-16 md:py-8 md:px-16 rounded-lg flex items-center">
              {t('Python')}
              <img src={ArrowRight} alt="Angle Right Icon" className="ml-2 w-8 h-8 md:w-12 h-12" />
            </button>
            <div className="mt-6 w-48 h-48 md:w-96 md:h-48 flex items-center justify-center bg-gray-800 rounded-full">
              <img src={bxlPython} alt="Python Icon" className="w-full h-full" />
            </div>
          </div>
          
          {/* Sección HTML */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-500 hover:bg-gray-500 text-black text-3xl font-bold py-6 px-16 md:py-8 md:px-16 rounded-lg flex items-center">
              {t('HTML')}
              <img src={ArrowRight} alt="Angle Right Icon" className="ml-2 w-8 h-8 md:w-12 h-12" />
            </button>
            <div className="mt-6 w-48 h-48 md:w-96 md:h-48 flex items-center justify-center bg-gray-800 rounded-full">
              <img src={bxlhtml} alt="HTML Icon" className="w-full h-full" />
            </div>
          </div>

          {/* Sección MYSQL */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-500 hover:bg-gray-500 text-black text-3xl font-bold py-6 px-16 md:py-8 md:px-16 rounded-lg flex items-center">
              {t('MYSQL')}
              <img src={ArrowRight} alt="Angle Right Icon" className="ml-2 w-8 h-8 md:w-12 h-12" />
            </button>
            <div className="mt-6 w-48 h-48 md:w-96 md:h-48 flex items-center justify-center bg-gray-800 rounded-full">
              <img src={bxlMysql} alt="Mysql Icon" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex justify-center mt-8">
          <p className="text-center font-bold text-white text-3xl md:text-5xl font-inter">{t('Message')}</p>
        </div>

        {/* Iconos adicionales */}
        <div className="flex justify-center mt-12 md:mt-16 space-x-8">
          <div className="flex flex-row items-center">
            <img src={filetypeSql} alt="New Icon 1" className="w-16 h-16 md:w-64 md:h-64" />
            <img src={filetypePy} alt="New Icon 2" className="w-16 h-16 md:w-64 md:h-64" />
            <img src={filetypeJava} alt="New Icon 3" className="w-16 h-16 md:w-64 md:h-64" />
          </div>
        </div>

        {/* Botón de proyecto */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link to="/projects" className="bg-gray-500 hover:bg-gray-500 text-black text-3xl font-bold py-6 px-16 md:py-8 md:px-32 rounded-lg flex items-center">
            {t('project')}
          <img src={ArrowRight} alt="Angle Right Icon" className="ml-2 w-8 h-8 md:w-12 h-12" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CombinedContent;



