import Navbar from "./Navbar";
import Hero from "./Hero";
import Service from "./Service";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import GetStarted from "./GetStarted";
import FAQ from "./FAQ";
import Footer from "./Footer";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero onHome={true} />
      </header>
      <main>
        <Service />
        <WhyUs />
        <Testimonial />
        <GetStarted />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
