import mobile from "../images/image-hero-mobile.png";
import desktop from "../images/image-hero-desktop.png";
import audioFile from "../images/client-audiophile.svg";
import makerFile from "../images/client-maker.svg";
import databizFile from "../images/client-databiz.svg";
import meetFile from "../images/client-meet.svg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse py-20 md:grid md:grid-cols-2 md:gap-10 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
      <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
        <h1 className="font-bold text-4xl lg:text-6xl mb-5 xl:text-7xl">
          Make remote work
        </h1>
        <p className="mb-5">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 ">
          Learn More
        </button>

        <ul className="grid grid-cols-4 gap-1 mt-10 md:mt-28 place-items-center md:place-items-start ">
          <li>
            <img src={databizFile} alt="" className="w-16 md:w-24" />
          </li>
          <li>
            <img src={audioFile} alt="" className="w-16 md:w-24" />
          </li>
          <li>
            <img src={meetFile} alt="" className="w-16 md:w-24" />
          </li>
          <li>
            <img src={makerFile} alt="" className="w-16 md:w-24" />
          </li>
        </ul>
      </article>

      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} className="w-full" />
        </picture>
      </article>
    </section>
  );
};

export default Hero;
