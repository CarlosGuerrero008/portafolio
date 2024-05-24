import React from 'react';
import './AboutComponent.css';

const AboutComponent = ({ t, piano, libros, yo }) => {
  return (
    <div className="about-container">
      <div className="section">
        <h2>Sobre mi</h2>
        <div className="section-content">
          <div className="text ">
            <p>{t('Biografia')}</p>
          </div>
          <img src={yo} alt="Perfil" className="profile-pic" />
        </div>
        <div className="text">
          <p>
            Tengo muchos gustos y pasatiempos, pero los más importantes, además de los que más me describen,
            son para mí leer y tocar el piano.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={libros} alt="Estante de libros" className="bookshelf-pic" />
          <div className="text">
            <h2>Sobre Leer</h2>
            <p>
              Me gusta leer desde bien joven. Leo mucho sobre filosofía y ciencia ficción. Mis autores favoritos son
              Albert Camus y Lovecraft. Además, mi libro favorito es "El hombre rebelde".
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <div className="text">
            <h2>Sobre el piano</h2>
            <p>
              Toco el piano, se me da bien, me han dado muchas clases durante mi vida, mi canción preferida para tocar es
              "Chopin Nocturne Op. 9 No. 2".
            </p>
          </div>
          <img src={piano} alt="Piano" className="piano-pic" />
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
