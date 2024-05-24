import React, { useEffect } from 'react';
import './ProjectsComponent.css';

const ProjectsComponent = ({ t, filetypeJava, filetypePy, filetypeSql }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      {/* Sección 1 */}
      <div className="section ">
        <h2>Mis Proyectos</h2>
        <div className="section-content">
          <div className="project">
            <div className="project-details">
              <img src={filetypeSql} alt="Project 1" className="project-image" />
              <div className="project-text">
                {/* Aquí puedes agregar detalles adicionales del proyecto */}
              </div>
            </div>
          </div>
          <div className="text text-large">
            <h3>{t("day")}</h3>
            <p>{t("infoday")}</p>
            <div className="text">
              <a href="https://github.com/CarlosGuerrero008/Programa-agregar-un-dia.-capitulo-4.git">{t("go")}</a>
            </div>
          </div>
        </div>
      </div>

      <hr /> {/* Línea de separación */}

      {/* Sección 2 */}
      <div className="section">
        <div className="section-content">
          <div className="project">
            <div className="project-details">
              <img src={filetypePy} alt="Project 2" className="project-image" />
              <div className="project-text">
                {/* Aquí puedes agregar detalles adicionales del proyecto */}
              </div>
            </div>
          </div>
          <div className="text text-large">
            <h3>{t("machine")}</h3>
            <p>{t("infomachine")}</p>
            <div className="text">
              <a href="https://github.com/CarlosGuerrero008/Programa-agregar-un-dia.-capitulo-4.git">{t("go")}</a>
            </div>
          </div>
        </div>
      </div>

      <hr /> {/* Línea de separación */}

      {/* Sección 3 */}
      <div className="section">
        <div className="section-content">
          <div className="project">
            <div className="project-details">
              <img src={filetypeJava} alt="Project 3" className="project-image" />
              <div className="project-text">
                {/* Aquí puedes agregar detalles adicionales del proyecto */}
              </div>
            </div>
          </div>
          <div className="text text-large">
            <h3>{t("Calculator")}</h3>
            <p>{t("infoCalculator")}</p>
            <div className="text">
              <a href="https://github.com/CarlosGuerrero008/Programa-agregar-un-dia.-capitulo-4.git">{t("go")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
