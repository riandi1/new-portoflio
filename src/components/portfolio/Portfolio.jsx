import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "PROYECTO",
    title: "Sistema de Cobranza",
    description:
      "Solución integral de gestión de cobranza que optimiza el seguimiento de pagos y automatiza recordatorios. Incluye generación de reportes detallados y administración eficiente de carteras de clientes con análisis de morosidad.",
    link: "https://prestalider.com/",
  },
  {
    id: 2,
    image: card2,
    category: "LANDING PAGE",
    title: "Astra Seguros",
    description:
      "Landing page para Astra Seguros, especialistas en seguros. Interfaz limpia y profesional que destaca sus servicios para empresas y personas. Enfoque en experiencia, tecnología y atención personalizada con diseño responsivo.",
    link: "https://astraassistance.com/",
  },
  {
    id: 3,
    image: card3,
    category: "PLATAFORMA WEB",
    title: "Venta de Tickets de Transporte",
    description:
      "Plataforma de venta de boletos de autobús con panel administrativo completo. Permite compras en línea, selección de asientos y pases digitales. Incluye gestión de rutas, horarios, flota y reportes avanzados de ventas.",
    link: "https://salinacrucenses.com/",
  },
  {
    id: 4,
    image: card4,
    category: "LANDING PAGE",
    title: "KBOX México",
    description:
      "Landing page para KBOX, líderes en venta y alquiler de contenedores en México. Muestra su amplio catálogo, servicios de almacenamiento y sistema de cotización en línea. Diseño moderno con énfasis en conversión y contacto directo.",
    link: "https://kbox.com.mx/",
  },
  {
    id: 5,
    image: card5,
    category: "SISTEMA DE GESTIÓN",
    title: "Oh my webs",
    description:
      "Sistema integral para gestión de servicio técnico de equipos. Permite control de inventario, generación de informes y seguimiento de mantenimientos. Especializado en impresoras, computadoras y dispositivos con historial completo por equipo.",
    link: "https://khaki-crab-836848.hostingersite.com/reparaciones",
  },
  {
    id: 6,
    image: card6,
    category: "SITIO WEB + SGT",
    title: "Mis Carnes Parrilla",
    description:
      "Plataforma completa con landing page atractiva y sistema de gestión (SGT) integrado. Incluye catálogo de productos editable y gestión de pedidos en tiempo real. Permite actualización dinámica de menús, promociones y ofertas especiales.",
    link: "https://www.miscarnesparrilla.com/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-194.25">
          <p className="section-title ">Portafolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Explora mi portafolio y descubre proyectos innovadores donde la estética y la funcionalidad se encuentran.
            Cada trabajo refleja mi pasión por crear experiencias digitales intuitivas y visualmente impactantes.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Ver más proyectos
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
