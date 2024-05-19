import React from 'react';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/img/profileImage.jpg';
import ArrowRight from '../assets/iconos/arrow-right.svg';
import bxlPython from '../assets/iconos/bxl-python.svg';
import bxlhtml from '../assets/iconos/bxl-html5.svg';
import bxlMysql from '../assets/iconos/brand-mysql.svg';
import filetypeJava from '../assets/iconos/filetype-java.svg';
import filetypePy from '../assets/iconos/filetype-py.svg';
import filetypeSql from '../assets/iconos/filetype-sql.svg';
import phoneIcon from '../assets/iconos/bxl-whatsapp.svg';
import emailIcon from '../assets/iconos/bxl-discord-alt.svg';
import Navbar from './sections/Navbar';
import MainContent from './sections/MainContent';
import NewContentSection from './sections/NewContentSection';
import Footer from './sections/Footer';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar changeLanguage={changeLanguage} t={t} />
      <MainContent t={t} profileImage={profileImage} ArrowRight={ArrowRight} />
      <NewContentSection 
        t={t} 
        bxlPython={bxlPython} 
        bxlhtml={bxlhtml} 
        bxlMysql={bxlMysql}
        filetypeJava={filetypeJava}
        filetypePy={filetypePy}
        filetypeSql={filetypeSql}
        ArrowRight={ArrowRight}
      />
      <Footer t={t} phoneIcon={phoneIcon} emailIcon={emailIcon} />
    </div>
  );
}

export default App;