import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          ¿Tienes una idea de proyecto? ¡Hablemos sobre tu proyecto!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          Siempre estoy abierto a discutir nuevos proyectos e ideas creativas.
          Conectemos y construyamos algo increíble juntos.
        </p>
        <a
          href="https://wa.me/573146133941?text=¡Hola! Me gustaria trabajar juntos en un proyecto."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Trabajemos Juntos
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
