import { 
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Ubicación",
    description: "Medellín, Colombia",
  },
  {
    icon: faEnvelope,
    title: "Correo electrónico",
    description: "rendondiaza944@gmail.com",
  },
  {
    icon: faPhone,
    title: "Teléfono",
    description: "+57 314 613 3941",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-lg border border-blue-50"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-gray-800">
                Hablemos sobre tu proyecto
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-gray-600">
                Estoy disponible para trabajo freelance. Escríbeme si tienes un
                proyecto en mente y crees que puedo ayudarte a hacerlo realidad.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-gray-800 lg:hidden text-center">
              Hablemos sobre tu proyecto
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
