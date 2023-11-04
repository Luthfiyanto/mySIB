import carImage from "./assets/img/img_car.svg";

import SuccessButton from "./components/Button";
function Hero({ onHome }) {
  return (
    <section id="hero">
      <div>
        <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        {onHome && (
          <a href="/cars">
            <SuccessButton text={"Mulai Sewa Mobil"} />
          </a>
        )}
      </div>
      <img src={carImage} alt="image_car" />
    </section>
  );
}

export default Hero;
