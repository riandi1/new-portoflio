import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Inicio", url: "introduction" },
  { id: 2, name: "Sobre mí", url: "profile" },
  { id: 3, name: "Proceso", url: "work-process" },
  { id: 4, name: "Portafolio", url: "portfolio" },
  // { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Servicios", url: "services" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3 pb-20">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Andres Diaz
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Andres Diaz.
        </p>
      </div>
    </div>
  );
};

export default Footer;
