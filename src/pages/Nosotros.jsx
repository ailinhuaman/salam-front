import React from "react";
import SecctionPg from "../components/SecctionPg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Nosotros() {
  return (
    <div className="min-h-screen bg-[#87ceeb]">
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="pb-8 jua-regular text-5xl  md:text-7xl w-full  md:py5 text-center text-white">
          Sobre Nosotros
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Misión y Visión */}
          <section className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Misión</h3>
            <p className="mb-4 text-gray-600">
              “Nuestra misión es proporcionar productos de alta calidad,
              incluyendo medicamentos y productos ortopédicos a nuestros
              clientes mediante canales alternativos de venta, tales como el
              comercio electrónico y venta directa. Nos comprometemos a ofrecer
              una experiencia de compra rápida y segura, centrada en la
              satisfacción del cliente y el cumplimiento de sus necesidades de
              salud y bienestar.”
            </p>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Visión</h3>
            <p className="text-gray-600">
              “Nos proponemos ser una empresa líder en el sector de ventas al
              por menor de medicamentos y productos ortopédicos, operando fuera
              de los canales comerciales tradicionales. Aspiramos a expandir
              nuestra oferta de productos y servicios innovadores, adaptándonos
              continuamente a las necesidades de nuestros clientes y
              contribuyendo al mejoramiento de su calidad de vida.”
            </p>
          </section>

          {/* Valores */}
          <section className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Nuestros Valores</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Pasión por los animales</li>
              <li>Compromiso con la calidad</li>
              <li>Servicio al cliente excepcional</li>
              <li>Responsabilidad social y ambiental</li>
              <li>Innovación continua</li>
              <li>Educación y concientización</li>
            </ul>
          </section>

          {/* Contacto */}
          <section className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                {/* <MapPin className="mr-2 h-5 w-5 text-gray-600" /> */}
                <p className="text-gray-600">
                  Av. Principal 123, Ciudad Mascota, CP 12345
                </p>
              </div>
              <div className="flex items-center">
                {/* <Phone className="mr-2 h-5 w-5 text-gray-600" /> */}
                <p className="text-gray-600">+51 930 138 707</p>
              </div>
              <div className="flex items-center">
                {/* <Mail className="mr-2 h-5 w-5 text-gray-600" /> */}
                <p className="text-gray-600">info@tiendamascotas.com</p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold">
            ¿Listo para conocernos mejor?
          </h2>
          <button
            className="inline-block rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Contáctanos
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Nosotros;
