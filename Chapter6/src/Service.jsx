import icon from "./assets/img/icon1.svg";
import serviceImage from "./assets/img/img_service.png";

function Service() {
  const descriptions = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 12 Jam", "Sewa Mobil Jangka Panjang Bulanan", "Gratis Antar - Jemput di Bandara", "Layanan Airport Transport / Drop In Out"];
  return (
    <section id="service">
      <img src={serviceImage} alt="img_service" />
      <article className="service_text">
        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        <ul className="list_item">
          {descriptions.map((item) => (
            <li key={item.length}>
              <img src={icon} />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Service;
