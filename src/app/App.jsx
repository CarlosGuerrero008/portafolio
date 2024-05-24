import React from 'react';
import { createRoot } from 'react-dom'; // Importa createRoot de react-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/img/profileImage.jpg';
import ArrowRight from '../assets/iconos/arrow-right.svg';
import bxlPython from '../assets/iconos/bxl-python.svg';
import bxlhtml from '../assets/iconos/bxl-html5.svg';
import bxlMysql from '../assets/iconos/brand-mysql.svg';
import filetypeJava from '../assets/iconos/filetype-java.svg';
import filetypePy from '../assets/iconos/filetype-py.svg';
import filetypeSql from '../assets/iconos/filetype-sql.svg';
import Navbar from './sections/Navbar';
import MainContent from './sections/MainContent';
import Footer from './sections/Footer';
import AboutComponent from './sections/AboutComponent';
import SkillsComponent from './sections/SkillsComponent';
import ProjectsComponent from './sections/ProjectsComponent';
import phoneIcon from '../assets/iconos/bxl-discord-alt.svg';
import emailIcon from '../assets/iconos/bxl-whatsapp.svg';
import libros from '../assets/img/libros.jpg';
import piano from '../assets/img/piano.jpg';
import yo from '../assets/img/yo.jpg';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const scrollToFooter = () => {
    // Suponiendo que tienes un elemento con id "footer"
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  

  const root = createRoot(document.getElementById('root')); // Crea el punto de entrada raíz con createRoot

  root.render(
    <Router>
      <div className="flex flex-col min-h-screen font-inter">
        <Navbar changeLanguage={changeLanguage} t={t} scrollToFooter={scrollToFooter} />
        <Routes>
          <Route path="/" element={<MainContent t={t} profileImage={profileImage} ArrowRight={ArrowRight} bxlPython={bxlPython} 
          bxlhtml={bxlhtml} 
          bxlMysql={bxlMysql}
          filetypeJava={filetypeJava}
          filetypePy={filetypePy}
          filetypeSql={filetypeSql}/>} />
          {/* Asegúrate de definir los componentes AboutComponent, SkillsComponent, ProjectsComponent y ContactComponent */}
          <Route path="/about" element={<AboutComponent  t={t} piano={piano} libros={libros} yo={yo} />} />
          <Route path="/skills" element={<SkillsComponent t={t} bxlPython={bxlPython} />} />
          <Route path="/projects" element={<ProjectsComponent t={t} filetypeJava={filetypeJava} filetypePy={filetypePy} filetypeSql={filetypeSql} />} />
        </Routes>
        <Footer t={t} phoneIcon={phoneIcon} emailIcon={emailIcon} />
      </div>
    </Router>
  );
}

export default App;
