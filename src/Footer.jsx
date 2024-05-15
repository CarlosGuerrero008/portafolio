import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-700 p-16 text-center text-white">
      <a href="#" className="text-white">{t('contact')}</a>
    </footer>
  );
}
export default Footer