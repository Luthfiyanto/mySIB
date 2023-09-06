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
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await BigInt64Array.listCars();
    Car.init(cars);
  }
}
