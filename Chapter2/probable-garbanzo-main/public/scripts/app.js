class App {
  constructor() {
    this.dateRent = document.getElementById("tanggal");
    this.timeRent = document.getElementById("waktu_ambil");
    this.sumPassanger = document.getElementById("jumlah_penumpang");
    this.searchButton = document.getElementById("search-btn");
    this.resultData = document.getElementById("result_data");
  }

  async init() {
    await this.load();

    this.searchButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      // const node = document.getElementById("result_data");
      node.innerHTML = car.render();
      this.resultData.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
}
