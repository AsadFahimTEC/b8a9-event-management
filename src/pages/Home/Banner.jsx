
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from 'react';

const Banner = () => {
  // initialized aos package
  useEffect(() =>{
    Aos.init({duration: 1000});
  }, [])

  return (
    <div className="bg-blue-100" data-aos="fade-down">
      <section className="mt-6 font-montserrat dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              One Ummah Festival
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              One Ummah Festival is a vibrant celebration of unity, diversity,
              and the rich cultural heritage of the Muslim community. Join us
              for a day of festivities that showcase the traditions, art,
              cuisine, and shared values that bring us together as one global
              Ummah.
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./banner.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
