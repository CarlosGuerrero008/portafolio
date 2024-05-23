import React from 'react';

const Footer = ({ t, phoneIcon, emailIcon }) => {
  return (
    <footer id="footer" className="bg-gray-700 p-8 md:p-16 text-center text-white">
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="Whatsapp" className="w-16 h-16 md:w-48 md:h-48" />
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-3xl">{t('Whatsapp')}</span>
            <span className="text-lg md:text-2xl">{t('3173996243')}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={emailIcon} alt="Discord" className="w-16 h-16 md:w-48 md:h-48" />
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-3xl">{t('Discord')}</span>
            <span className="text-lg md:text-2xl">{t('Makoto')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
