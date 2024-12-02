import Navbar from "../components/Navbar";

export default function Gatos() {
  return (
    <div className="min-h-screen ">
      <div
        className="relative h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url('https://content.elmueble.com/medio/2023/05/22/gatitos_1f740045_230522123911_1000x667.jpg')`,
        }}
      >
        <div className=" w-full h-full  bg-black/40">
          <Navbar />
          {/* title page */}
          <h2 className="py-28 jua-regular text-5xl  md:text-7xl w-full py-8 md:py5 text-center text-white flex flex-col items-center gap-6">
            Productos para Gatos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={74}
              height={74}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-cat"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" />
              <path d="M2 16h5l-4 4" />
              <path d="M22 16h-5l4 4" />
              <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M9 11v.01" />
              <path d="M15 11v.01" />
            </svg>
          </h2>
          {/* svg separator */}
          <div className="w-full absolute bottom-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full rotate-180 fill-[#B988C8] -mb-1"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-[#B988C8] z-20 bg-huellas">
        {/* Main Content */}
        <main className="mx-auto max-w-5xl px-4 py-8">
          {/* Search Bar */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Busca tu producto"
                className="w-full rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-xl"
              />
              {/* <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" /> */}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-search absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white p-4 shadow-xl"
              >
                <div className="aspect-square w-full rounded-lg bg-[#004AAD] border">
                  <img
                    src="https://res.cloudinary.com/djiro1win/image/upload/v1732760894/img%20veterinaria/wilson%20david.jpg"
                    alt=""
                    className="w-full h-full object-cover shadown-lg"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Texto Titulo</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet.{" "}
                    </p>
                    <p className="text-gray-600">S/ 245</p>
                  </div>
                  <button className="h-10 w-10 grid place-content-center rounded-lg  bg-[#004AAD]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      color="white"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart "
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            <button className="h-10 w-10 rounded-lg bg-white shadow-sm" />
            <button className="h-10 w-10 rounded-lg bg-white shadow-sm" />
          </div>
        </main>
      </div>
    </div>
  );
}
