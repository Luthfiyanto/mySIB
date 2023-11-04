import iconComplete from "./assets/img/icon_complete.svg";
import iconPrice from "./assets/img/icon_price.svg";
import icon24H from "./assets/img/icon_24hrs.svg";
import iconProfessional from "./assets/img/icon_professional.svg";
import WhyCard from "./WhyCard";

function WhyUs() {
  const data = [
    {
      img: iconComplete,
      title: "Mobil Lengkap",
      body: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      img: iconPrice,
      title: "Harga Murah",
      body: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      img: icon24H,
      title: "Layanan 24 Jam",
      body: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      img: iconProfessional,
      title: "Sopir Profesional",
      body: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];
  return (
    <section id="why_us">
      <article className="why_title">
        <h3>Why Us?</h3>
        <p>Mengapa harus pilih Binar Car rental?</p>
      </article>
      <article className="why_item">
        {data.map((svc, index) => (
          <WhyCard key={index} img={svc.img} title={svc.title} body={svc.body} />
        ))}
      </article>
    </section>
  );
}

export default WhyUs;
