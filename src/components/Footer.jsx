import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="rounded-t-xl bg-white text-gray-700 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex flex-wrap justify-center text-center ">
          <ul className="flex flex-col gap-4 md:flex-row space-x-4 flex-wrap items-center justify-center ">
            <li>
              <Link to="/" className="text-gray-900 hover:text-gray-700">
                Perros
              </Link>
            </li>
            <li>
              <Link to="/gatos" className="text-gray-900 hover:text-gray-700">
                Gatos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="text-gray-900 hover:text-gray-700">
                Nosotros
              </Link>
            </li>
            {/* Agrega más enlaces según tus necesidades */}
            <li>
            <Link to="/terminos" className="text-gray-900 hover:text-gray-700">
                Política de Privacidad y Tèrminos
                </Link>
            </li>
            <li>
            <Link to="/admin" className="text-gray-900 hover:text-gray-700">
                Administrar
                </Link>
            </li>
            
          </ul>
        </nav>
        <p className="mt-4">© {new Date().getFullYear()} La Casa De Salam</p>
      </div>
    </footer>
  );
}

export default Footer;
