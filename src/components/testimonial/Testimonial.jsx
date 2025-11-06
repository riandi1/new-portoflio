import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Durante nuestro tiempo juntos en Tecnoparque SENA de Rionegro Antioquia, demostró una habilidad impresionante para crear sitios web de alta calidad, cumpliendo siempre con los plazos y superando nuestras expectativas.",
    quote: `Su profundo conocimiento técnico, su disposición para aprender nuevas tecnologías y su capacidad para comunicar de manera efectiva hicieron que fuera un miembro valioso de nuestro equipo. Además, su actitud positiva y su ética de trabajo ejemplar lo convirtieron en un colega excepcional. Recomiendo encarecidamente a Andrés Mauricio Rendón para cualquier proyecto de desarrollo web.`,
    name: "Andres Felipe",
    designation: "Software Engineer de SENA",
  },
  {
    message:
      "Mi primer encuentro con Andrés ocurrió en las instalaciones del SENA, en la localidad de Rionegro, Antioquía, donde se me otorgó el privilegio de supervisarlo.",
    quote: `Durante esta experiencia, su desempeño se distinguió por su altísimo nivel de profesionalismo y eficiencia. Andrés destacaba notablemente por su amabilidad, espíritu colaborador, pasión y compromiso incansable. Su presencia fue un activo invaluable para nuestro equipo, y no dudo en recomendarlo para cualquier desafío en el desarrollo web.`,
    name: "Alberto Echeverry",
    designation: "Teacher de U. ITM",
  },
  {
    message:
      "Mauricio es un desarrollador altamente competente y versátil, con experiencia en el desarrollo Full Stack y conocimientos en tecnologías móviles como Flutter.",
    quote: `Su capacidad para aprender rápidamente y adaptarse a nuevas tecnologías lo convierte en un recurso invaluable. Posee excelentes habilidades de comunicación, trabaja bien en equipo, es meticuloso y muestra una fuerte ética profesional. Su creatividad y empatía complementan sus habilidades técnicas, haciéndolo un profesional completo y valioso.`,
    name: "Sebastian Ocampo",
    designation: "Software Engineer de ShippyPro",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25 mt-20">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonios</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
