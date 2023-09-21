import heroMobile from "../assets/images/image-hero-mobile@2x.webp";
import heroTablet from "../assets/images/image-hero-tablet@2x.webp";

function Hero() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#F0F1FF] pb-3 px-5 flex flex-col items-center md:px-0 ">
        <div className="pt-9 flex flex-col items-center justify-center md:grid md:grid-cols-2 md:pt-20 overflow-hidden ">
          <div className="px-10">
            <h1 className="text-4xl pb-7 pt-3">
              Maximize skill, minimize budget
            </h1>
            <p className="text-gray text-lg pb-6 ">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button className="rounded-full py-2 px-3 mb-8 bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] hover:opacity-50">
              Get Started
            </button>
          </div>

          <div className="flex items-center justify-center md:relative ">
            <img
              src={heroMobile}
              alt="Lady drinking a cup of tea"
              className="md:hidden"
            />
            <img
              src={heroTablet}
              alt="Lady drinking a cup of tea"
              className="hidden md:block overflow-hidden md:absolute"
            />
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] w-80 py-5 px-5 rounded-[10px]">
          <p className="text-2xl font-bold text-white">
            Check out our most popular courses!
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
