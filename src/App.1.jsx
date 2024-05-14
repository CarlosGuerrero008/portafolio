function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-50 p-4">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex-1">
            <input type="text" placeholder="Buscar..." className="p-2 rounded-lg border-none w-full" />
          </div>
          <button className="block sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className="hidden sm:flex justify-end mt-4 sm:mt-0 flex-1">
            <li className="mr-6">
              <a href="#" className="text-black">Home</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-black">Sobre Mí</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-black">Habilidades</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-black">Proyectos</a>
            </li>
            <li>
              <a href="#" className="text-black">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center items-center w-full h-auto bg-gray-950 p-4">
        <h1 className="text-3xl font-bold text-white">¡Hola! Soy Carlos, ingeniero de software. Este es mi portafolio donde encontraras inoformacion sobre mi, mis Habilidades, ademas algunos proyectos en los que he trabajado.</h1>
      </div>
      <main className='font-roboto flex justify-center items-center w-screen h-screen'>
        {/* Contenido principal aquí */}
      </main>
      <footer className="bg-gray-700 p-4 text-center text-white">
        <a href="#" className="text-white">Contacto</a>
      </footer>
    </div>
  );
}
