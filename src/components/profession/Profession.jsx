import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Arquitectura de Software",
    description:
      "Diseño sistemas escalables con patrones de arquitectura limpia, microservicios y principios SOLID. Especializado en optimizar el rendimiento de aplicaciones de alto tráfico.",
  },
  {
    id: 2,
    title: "Integración de Sistemas",
    description:
      "Experiencia en conectar múltiples plataformas y servicios a través de APIs REST, WebSockets y servicios en la nube para crear ecosistemas tecnológicos unificados.",
  },
  {
    id: 3,
    title: "Automatización Avanzada",
    description:
      "Desarrollo de bots y scripts para automatizar tareas repetitivas, extracción de datos con técnicas avanzadas de scraping y procesamiento de imágenes con Tesseract.js.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">¿Qué hago?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Especializado en <span className="bg-highlight">soluciones técnicas complejas</span> que resuelven problemas reales de negocio. Mi enfoque combina el conocimiento técnico con una profunda comprensión de las necesidades del usuario final.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            He liderado proyectos que van desde aplicaciones móviles hasta sistemas empresariales, siempre buscando el equilibrio perfecto entre innovación y funcionalidad.
          </p>
        </div>
        <a
          href="mailto:rendondiaza944@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          ¡Contáctame!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
