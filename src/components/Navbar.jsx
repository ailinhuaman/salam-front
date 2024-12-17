import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative mx-auto max-w-5xl px-8 py-8">
      <div className="relative flex items-center justify-between rounded-full bg-white px-8 py-2 shadow-sm ">
        <div className="flex items-center w-12 p-1 rounded-full">
          <img
            src="https://res.cloudinary.com/dgausbgfo/image/upload/v1734442902/img%20veterinaria/ninxqrd721hincge5bew.jpg"
            alt="logo de la empresa"
          />
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 ">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Perros
          </Link>

          <Link to="/gatos" className="text-gray-700 hover:text-gray-900">
            Gatos
          </Link>

          <Link to="/nosotros" className="text-gray-700 hover:text-gray-900">
            Nosotros
          </Link>
        </div>

        <button
          className="block md:hidden p-1 bg-white rounded-full m-0 text-[#004AAD] "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          )}
        </button>

        <div className="z-20 absolute w-[50px] h-[50px] bg-white top-[20px] right-[-20px] rounded-full "></div>
        <div className="z-20 absolute w-[50px] h-[50px] bg-white bottom-[20px] right-[-20px] shadown-lg rounded-full"></div>
        <div className="z-20 absolute w-[50px] h-[50px] bg-white top-[20px] left-[-20px] rounded-full "></div>
        <div className="z-20 absolute w-[50px] h-[50px] bg-white bottom-[20px] left-[-20px] shadown-lg rounded-full"></div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 bottom-0 right-0 left-0 z-30  w-full h-full bg-black/50 flex  justify-center items-center`}
        onClick={() => setIsOpen(!setIsOpen)}
      >
        <div className="rounded-xl bg-white w-[80%] h-[80%] m-auto flex flex-col justify-center items-center gap-6">
          <div className="flex items-center w-1/2 justify-center bg-white">
            <img
              src="https://res.cloudinary.com/dgausbgfo/image/upload/v1734442902/img%20veterinaria/ninxqrd721hincge5bew.jpg"
              alt="logo de la empresa"
              class="w-24"
            />
          </div>
          <Link to="/" className="text-[#004AAD] hover:text-gray-700 text-3xl">
            Perros
          </Link>

          <Link
            to="/gatos"
            className="text-[#004AAD] hover:text-gray-700 text-3xl"
          >
            Gatos
          </Link>

          <Link to="/nosotros" className="text-[#004AAD] hover:text-gray-700 text-3xl">
            Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
