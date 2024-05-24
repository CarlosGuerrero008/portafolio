import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const SkillstheerComponent = ({t, bxlMysql }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-7xl p-8">
        <div className="flex flex-col items-center mb-8 lg:flex-row lg:items-start">
          <div className="mb-8 lg:mr-24">
            <h2 className="text-6xl text-black font-bold mb-4 lg:mb-12">MySQL</h2>
            <img src={bxlMysql} alt="Python Logo" className="w-48 h-48" />
          </div>
          <p className="text-4xl text-center lg:text-left">{t("infoSQL")}</p>
        </div>
        <div className="mt-16 flex justify-center space-x-10">
          <Link to="/skillstwo" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-8 px-8 rounded-full text-2xl lg:py-16 lg:px-16">
            &#8592;
          </Link>
          <Link to="/" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-8 px-8 rounded-full text-2xl lg:py-16 lg:px-16">
            &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SkillstheerComponent;

