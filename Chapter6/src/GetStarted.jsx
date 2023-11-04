import SuccessButton from "./components/Button";
function GetStarted() {
  return (
    <div className="card p-5" style={{ backgroundColor: "rgba(13, 40, 166, 1)" }}>
      <div className="card-body get_started">
        <h2 style={{ color: "white", textAlign: "center" }}>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p className="card-text" style={{ maxWidth: "468px", textAlign: "center", color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="/cars">
          <SuccessButton text={"Mulai Sewa Mobil"} />
        </a>
      </div>
    </div>
  );
}

export default GetStarted;
