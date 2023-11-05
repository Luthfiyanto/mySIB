import cap from "../assets/img/fi_users.svg";
import setting from "../assets/img/fi_settings.svg";
import calendar from "../assets/img/fi_calendar.svg";

function Card({ car }) {
  const { image, manufacture, model, rentPerDay, description, capacity, transmission, year } = car;

  const reversedValue = String(rentPerDay).split("").reverse().join("");
  const groups = reversedValue.match(/.{1,3}/g);
  const formattedValue = groups.join(".").split("").reverse().join("");

  const imageSrc = `../../public/${image}`;
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body card_car">
        <img src={imageSrc} alt={manufacture} />
        <p className="car-title">{`${manufacture} ${model}`}</p>
        <h5>Rp {formattedValue} / hari</h5>
        <p className="desc">{description}</p>
        <div className="detail_car">
          <img src={cap} alt="kapasitas" />
          <p>{capacity} orang</p>
        </div>
        <div className="detail_car">
          <img src={setting} alt="mekanik" />
          <p>{transmission}</p>
        </div>
        <div className="detail_car">
          <img src={calendar} alt="tanggal" />
          <p>Tahun {year}</p>
        </div>
        <button type="button" className="btn btn-success w-100">
          Pilih Mobil
        </button>
      </div>
    </div>
  );
}

export default Card;
