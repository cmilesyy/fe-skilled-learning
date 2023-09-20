import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import design from "./assets/images/icon-design.svg";
import business from "./assets/images/icon-business.svg";
import photography from "./assets/images/icon-photography.svg";
import animation from "./assets/images/icon-animation.svg";
import crypto from "./assets/images/icon-business.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="bg-gradient-to-t from-[#F0F1FF] via-white to-[#F0F1FF] md:pt-52">
        <Cards
          image={animation}
          title={"Animation"}
          description={
            "Learn the latest animation techniques to create stunning motion design and captivate your audience."
          }
        />
        <Cards
          image={design}
          title={"Design"}
          description={
            "Learn the latest animation techniques to create stunning motion design and captivate your audience."
          }
        />
        <Cards
          image={photography}
          title={"Photography"}
          description={
            "Learn the latest animation techniques to create stunning motion design and captivate your audience."
          }
        />
        <Cards
          image={crypto}
          title={"Crypto"}
          description={
            "Learn the latest animation techniques to create stunning motion design and captivate your audience."
          }
        />
        <Cards
          image={business}
          title={"Business"}
          description={
            "Learn the latest animation techniques to create stunning motion design and captivate your audience."
          }
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
