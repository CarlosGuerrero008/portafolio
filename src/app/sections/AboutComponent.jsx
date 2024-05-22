import React from 'react';
import './AboutComponent.css';

const AboutComponent = ({ t = { t }, piano = { piano }, libros = { libros }, yo = { yo } }) => {
  return (
    <div className="about-container">
      <div className="section">
        <h2>Sobre mi</h2>
        <div className="section-content">
          
        <div className="section">
        <h2></h2>
        <div className="section-content">
          <div className="text text-large">
            <p>
            Daré una breve bibliografía de quien soy: Nací en Colombia, Pasto Nariño, el 21 de octubre del 2002.
                Estudié en la normal superior donde me gradué. Desde niño soy un friki por las computadoras.
            </p>
          </div>
          <img src={yo} alt="Piano" className="piano-pic" />
        </div>
        <div className="text text-large">
              <p>
                Tengo muchos gustos y pasatiempos, pero los más importantes, además de los que más me describen,
                son para mí leer y tocar el piano.
              </p>
        </div>
      </div>
          
        </div>
      </div>
      <div className="section">
        <h2></h2>
        <div className="section-content">
          <img src={libros} alt="Estante de libros" className="bookshelf-pic" />
          <div className="text text-large">
          <h2>Sobre Leer</h2>
            <p>
              Me gusta leer desde bien joven. Leo mucho sobre filosofía y ciencia ficción. Mis autores favoritos son
              Albert Camus y Lovecraft. Además, mi libro favorito es "El hombre rebelde".
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2></h2>
        <div className="section-content">
          <div className="text text-large">
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
