import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experiencia",
    description: "4+ Años",
  },
  {
    id: 2,
    title: "Proyectos Completados",
    description: "50+",
  },
  {
    id: 3,
    title: "Clientes Satisfechos",
    description: "20+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hola, Soy
            <span className="text-nowrap shrink-0 inline-block w-full">
              Andres Diaz
            </span>
          </p>
         <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
  Desarrollador Full Stack con más de <span className="bg-highlight">4 años de experiencia</span> creando 
  soluciones tecnológicas. Especializado en integrar sistemas backend robustos con interfaces 
  modernas, utilizando tecnologías como <span className="bg-highlight">Laravel, Node.js, React y React Native</span>.
  Apasionado por la automatización de procesos y la optimización de flujos de trabajo.
</p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:rendondiaza944@gmail.com"
            >
              ¡Contáctame!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full max-lg:mx-auto max-w-[436px] relative">
        <div className="relative w-full h-0 pb-[118.6%] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-gray-200">
          <img
            src={person}
            alt="person"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-auto max-h-[110%] object-contain"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              imageRendering: 'crisp-edges',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
            }}
            onLoad={(e) => {
              // Forzar renderizado suave
              e.currentTarget.style.willChange = 'transform';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
