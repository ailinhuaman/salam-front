import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const TermsAndConditions = () => {
  return (
    <div className="bg-[#87ceeb]">
        <Navbar />
        <div className="bg-[#87ceeb] p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-10 ">
        
        <h1 className="text-2xl font-bold text-yellow-600 mb-4 text-center">
          Términos y Condiciones de La Casa de Salam
        </h1>
        <p className="text-gray-700 mb-6">
          Bienvenido a <strong>La Casa de Salam</strong>. Al acceder y usar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos detenidamente antes de realizar cualquier compra.
        </p>
  
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            1. Información General
          </h2>
          <p className="text-gray-700">
            La Casa de Salam es un petshop en línea que ofrece productos para mascotas, incluyendo alimentos, accesorios, y juguetes. Nuestra empresa está registrada legalmente y cumple con las normativas vigentes.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            2. Uso del Sitio Web
          </h2>
          <p className="text-gray-700">
            Al usar nuestro sitio, te comprometes a:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Proporcionar información verídica al registrarte o realizar una compra.</li>
            <li>No usar el sitio para actividades ilícitas.</li>
            <li>Respetar los derechos de propiedad intelectual de los contenidos publicados.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            3. Políticas de Envío y Devoluciones
          </h2>
          <p className="text-gray-700">
            No Ofrecemos envíos a nivel nacional. Las políticas de devolución aplican únicamente para productos con defectos de fabricación, los cuales deberán ser reportados en un plazo máximo de 7 días hábiles después de la entrega.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            4. Métodos de Pago
          </h2>
          <p className="text-gray-700">
            Aceptamos pagos mediante tarjetas de crédito, débito y transferencias bancarias. Todos los pagos son procesados de manera segura.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            5. Propiedad Intelectual
          </h2>
          <p className="text-gray-700">
            Todos los derechos sobre el diseño, texto, gráficos y otros contenidos en este sitio son propiedad de La Casa de Salam y están protegidos por las leyes de propiedad intelectual.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            6. Modificaciones a los Términos y Condiciones
          </h2>
          <p className="text-gray-700">
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web.
          </p>
        </section>
  
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            7. Contacto
          </h2>
          <p className="text-gray-700">
            Si tienes alguna pregunta, puedes contactarnos a través de nuestro correo electrónico:{" "}
            <a
              href="mailto:contacto@lacasadesalam.com"
              className="text-yellow-600 hover:underline"
            >
              aileenhuaman@gmail.com
            </a>
          </p>
        </section>
  
        <p className="text-sm text-gray-500 mt-6 text-center">
          Última actualización: 1 de diciembre de 2024.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
