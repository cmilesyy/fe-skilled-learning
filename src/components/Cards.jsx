/* eslint-disable react/prop-types */


function Cards({ image, title, description, cta = 'Get Started', }) {
  return (
    <>
      <section className="relative flex items-center justify-center py-8 ">
        <div className="bg-white w-80 h-72 rounded-lg px-7">
          <img src={image} alt="design image" className="absolute top-1 left-10" />
          <div className="pt-10 flex flex-col gap-y-5">
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="font-light text-gray text-md">
              {description}
            </p>
            <span className="text-pink font-semibold">{cta}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
