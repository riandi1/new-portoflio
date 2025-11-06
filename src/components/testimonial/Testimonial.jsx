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
  {
    message:
      "Andres is the kind of collaborative and skilled professional you hope to find on every project. His reliability ensured we never missed a deadline, and his technical versatility allowed him to contribute meaningfully to every part of our stack.",
    quote: `What truly sets him apart is his openness; he actively seeks out and thoughtfully considers different perspectives and implementation strategies, making him a catalyst for innovation and team growth.`,
    name: "Juventino Villegas",
    designation: "Software Engineer at TechnologyPOS"
  },
  {
    message:
      "Andres Rendon es una persona muy dedicada, siempre busca hacer las cosas bien y se nota su pasión por lo que hace. Su enfoque meticuloso y su atención al detalle garantizan resultados de alta calidad en cada tarea que emprende.",
    quote: `Trabajar con él ha sido una experiencia muy positiva. Su actitud proactiva y su capacidad para trabajar en equipo lo convierten en un recurso valioso para cualquier proyecto tecnológico.`,
    name: "Andres Sáenz",
    designation: "Software Engineer at AOACOLOMBIA SAS"
  },
  {
    message:
      "Trabajar con Rendón ha sido una experiencia excelente. Es una persona comprometida, con gran capacidad para resolver problemas y aportar ideas innovadoras en cada proyecto.",
    quote: "Su habilidad para analizar desafíos complejos y proponer soluciones efectivas es realmente destacable. Su actitud positiva y su disposición para colaborar hacen que sea un placer trabajar junto a él en cualquier iniciativa.",
    name: "James Navarro",
    designation: "Software Engineer at AOACOLOMBIA SAS"
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
