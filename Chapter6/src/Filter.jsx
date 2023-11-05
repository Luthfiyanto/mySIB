import { useContext, useEffect, useState } from "react";
import OptionComponent from "./components/OptionComponent";
import { FilterContext } from "./context/FilterContext";

function Filter() {
  const driver = {
    name: "driver_type",
    option: ["Pilih Driver", "Dengan Sopir", "Tanpa Sopir"],
  };

  const timeOp = {
    name: "waktu_ambil",
    option: ["Pilih Waktu", "08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00"],
  };

  const [drive, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passanger, setPassanger] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const { submitButton, getAllCars } = useContext(FilterContext);

  const onSubmit = () => {
    const payload = { date, time, passanger };
    setIsFilter(true);
    submitButton(payload);
  };

  useEffect(() => {
    if (!isFilter) {
      getAllCars();
      setIsFilter(false);
    }
  }, []);

  return (
    <article className="card shadow">
      <div className="card-body container filter_card">
        <div className="container filter">
          <label htmlFor="driver_type">Tipe Driver</label>
          <OptionComponent name={driver.name} option={driver.option} value={drive} onChange={(e) => setDriver(e.target.value)} />
        </div>
        <div className="container filter">
          <label htmlFor="tanggal">Tanggal</label>
          <input type="date" id="tanggal" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="container filter">
          <label htmlFor="waktu_ambil">Waktu Jemput / Ambil</label>
          <OptionComponent name={timeOp.name} option={timeOp.option} value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="container filter">
          <label htmlFor="jumlah_penumpang">Jumlah Penumpang</label>
          <input type="number" id="jumlah_penumpang" className="form-control" value={passanger} onChange={(e) => setPassanger(e.target.value)} />
        </div>
        <div className="filter_button">
          <button type="submit" id="search-btn" className="btn btn-success" onClick={onSubmit}>
            Cari Mobil
          </button>
        </div>
      </div>
    </article>
  );
}

export default Filter;
