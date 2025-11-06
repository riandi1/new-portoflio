import { useEffect, useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const scrollToTop = () => {
  animateScroll.scrollToTop(options); /* To Top */
  //   animateScroll.scrollToBottom(options); /* To Bottom */
};

const options = {
  duration: 500,
  smooth: true,
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-end fixed bottom-10 right-0 sm:right-10 z-10 transition-all space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/573146133941?text=¡Hola! Me gustaría contactarte para un proyecto."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg"
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white shadow-lg ${
          position < 200 ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
        aria-label="Volver arriba"
      >
        <FontAwesomeIcon icon={faAngleUp} size="xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
