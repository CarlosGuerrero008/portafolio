import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const SkillstwoComponent = ({ bxlPython }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-7xl p-8">
        <div className="flex flex-col items-center mb-8 lg:flex-row lg:items-start">
          <div className="mb-8 lg:mr-24">
            <h2 className="text-6xl text-black font-bold mb-4 lg:mb-12">HTML</h2>
            <img src={bxlPython} alt="Python Logo" className="w-48 h-48" />
          </div>
          <p className="text-4xl text-center lg:text-left">
            He utilizado Python en diversos proyectos, lo que me ha brindado una sólida familiaridad con este lenguaje. Esta experiencia ha sido fundamental para mi desarrollo, permitiéndome crear soluciones eficientes y efectivas en mis proyectos. Me encantaría compartir más detalles sobre mis trabajos con Python en mi portafolio.
          </p>
        </div>
        <div className="mt-16 flex justify-center space-x-10">
          <Link to="/skills" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-8 px-8 rounded-full text-2xl lg:py-16 lg:px-16">
            &#8592;
          </Link>
          <Link to="/skillstheer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-8 px-8 rounded-full text-2xl lg:py-16 lg:px-16">
            &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SkillstwoComponent;

