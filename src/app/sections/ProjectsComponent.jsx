import React from 'react';
import './ProjectsComponent.css'; // Asegúrate de tener un archivo CSS para el estilo de ProjectsComponent

const ProjectsComponent = ({t={t}, filetypeJava={filetypeJava}, filetypePy={filetypePy}, filetypeSql={filetypeSql}}) => {
  return (
    <div className="projects-container">
      {/* Sección 1 */}
      <div className="section">
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
            <h3>Programa agregar un día</h3>
            <p>
              En este proyecto tengo un código hecho en C# que añade un día al calendario teniendo en cuenta años bisiestos y el mes de febrero.
            </p>
            <a href="https://github.com/CarlosGuerrero008/Programa-agregar-un-dia.-capitulo-4.git">Ir al proyecto</a>
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
            <h3>Proyecto máquina virtual</h3>
            <p>
              En este proyecto tengo creada una máquina con Docker Compose, que permite orquestar y gestionar varios contenedores.
            </p>
            <a href="#">Ir al proyecto 2</a>
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
            <h3>Programa calculadora</h3>
            <p>
              En este proyecto tengo un código hecho en Python sobre una calculadora que suma, resta, multiplica, divide, es muy básico.
            </p>
            <a href="#">Ir al proyecto 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
