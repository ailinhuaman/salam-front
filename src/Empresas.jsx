import { Link } from "react-router-dom";


export default function Empresas() {

  return (

    <div className="min-h-screen bg-gray-100">
    {/* Navigation Bar */}
    <nav className="relative mx-auto max-w-5xl px-4 py-4">
      <div className="relative flex items-center justify-between rounded-full bg-white px-8 py-3 shadow-sm before:absolute before:-left-8 before:h-12 before:w-12 before:rounded-full before:bg-white before:content-[''] after:absolute after:-right-8 after:h-12 after:w-12 after:rounded-full after:bg-white after:content-['']">
        <div className="absolute left-12 h-4 w-4 rounded-full bg-gray-200" />
        <div className="flex flex-1 justify-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Productos
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Perros
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Gatos
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Servicios
          </Link>
          <Link href="/about-us" className="font-semibold text-gray-900">
            Nosotros
          </Link>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Sobre Nosotros</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Historia */}
        <section className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Nuestra Historia</h2>
          <p className="text-gray-600">
            Fundada en 2010, nuestra tienda de mascotas comenzó como un pequeño negocio familiar con la
            misión de proporcionar productos de alta calidad y servicios excepcionales para las mascotas y
            sus dueños. A lo largo de los años, hemos crecido y evolucionado, pero nuestra pasión por los
            animales y nuestro compromiso con la excelencia siguen siendo el corazón de todo lo que hacemos.
          </p>
        </section>

        {/* Misión y Visión */}
        <section className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Misión y Visión</h2>
          <h3 className="mb-2 text-xl font-semibold">Misión</h3>
          <p className="mb-4 text-gray-600">
            Nuestra misión es mejorar la vida de las mascotas y sus dueños proporcionando productos de
            calidad, servicios personalizados y educación sobre el cuidado responsable de los animales.
          </p>
          <h3 className="mb-2 text-xl font-semibold">Visión</h3>
          <p className="text-gray-600">
            Aspiramos a ser la tienda de mascotas líder y más confiable, reconocida por nuestra dedicación
            al bienestar animal, la innovación en productos y servicios, y nuestro impacto positivo en la
            comunidad de amantes de las mascotas.
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
              <p className="text-gray-600">Av. Principal 123, Ciudad Mascota, CP 12345</p>
            </div>
            <div className="flex items-center">
              {/* <Phone className="mr-2 h-5 w-5 text-gray-600" /> */}
              <p className="text-gray-600">+1 (234) 567-8900</p>
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
        <h2 className="mb-4 text-2xl font-semibold">¿Listo para conocernos mejor?</h2>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Contáctanos
        </Link>
      </div>
    </main>
  </div>
    
  );
}
