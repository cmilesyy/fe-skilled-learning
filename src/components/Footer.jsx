import logoLight from "../assets/images/logo-light.svg";

function Footer() {
  return (
    <>
      <footer className="bg-dark-blue flex items-center justify-between py-5 px-5">
  
          <img src={logoLight} alt="Skilled Logo" />
          <button className="rounded-full px-5 py-2 bg-gradient-to-b from-[#4851FF] to-[#F02AA6] hover:opacity-50">
            Get Started
          </button>

      </footer>
    </>
  );
}

export default Footer;
