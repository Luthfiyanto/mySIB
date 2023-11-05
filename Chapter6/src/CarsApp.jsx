import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Filter from "./Filter";
import ListCars from "./ListCars";
import "./assets/css/filterpage.css";

function CarsApp() {
  return (
    <>
      <header>
        <Navbar />
        <Hero onHome={false} />
      </header>
      <main>
        <section id="filter_section">
          <Filter />
          <ListCars />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CarsApp;
