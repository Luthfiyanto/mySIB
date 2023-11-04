import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function Cars() {
  return (
    <>
      <header>
        <Navbar />
        <Hero onHome={false} />
      </header>
      <Footer />
    </>
  );
}

export default Cars;
