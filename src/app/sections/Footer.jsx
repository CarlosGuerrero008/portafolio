import React from 'react';

const Footer = ({ t, phoneIcon, emailIcon }) => {
  return (
    <footer className="bg-gray-700 p-16 text-center text-white">
      <div className="flex justify-center space-x-16">
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="Whatsapp" className="w-48 h-48" />
          <div className="flex flex-col items-center">
            <span className="text-3xl">{t('Whatsapp')}</span>
            <span className="text-2xl">{t('3173996243')}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={emailIcon} alt="Discord" className="w-48 h-48" />
          <div className="flex flex-col items-center">
            <span className="text-3xl">{t('Discord')}</span>
            <span className="text-2xl">{t('Makoto')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
