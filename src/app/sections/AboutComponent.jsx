import React, { useEffect } from 'react';
import './AboutComponent.css';

const AboutComponent = ({ t, piano, libros, yo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <div className="section">
        <h2>{t("About me")}</h2>
        <div className="section-content">
          <div className="text">
            <p>{t('Biografia')}</p>
          </div>
          <img src={yo} alt="Perfil" className="profile-pic" />
        </div>
        <div className="text">
          <p>
          {t("hobbies")}
          </p>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={libros} alt="Estante de libros" className="bookshelf-pic" />
          <div className="text">
            <h2>{t("read")}</h2>
            <p>
            {t("About Read")}
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <div className="text">
            <h2> {t("piano")}</h2>
            <p>
              {t("On the piano")}
            </p>
          </div>
          <img src={piano} alt="Piano" className="piano-pic" />
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
