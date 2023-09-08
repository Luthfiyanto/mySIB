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

    this.searchButton.onclick = this.show;
  }

  // Fungsi filter
  filterCars = () => {
    const filteredCars = Car.list.filter((car) => {
      return car.capacity >= parseInt(this.sumPassanger.value);
    });
    return filteredCars;
  };

  // Fungsi insert view
  displayCars = (car) => {
    const node = document.createElement("div");
    node.innerHTML = car.render();
    this.resultData.appendChild(node);
  };

  // Method untuk menampilkan mobil
  run = () => {
    this.clear();
    const filteredCars = this.filterCars();

    if (!this.sumPassanger.value) {
      Car.list.forEach((car) => {
        this.displayCars(car);
      });
    } else {
      filteredCars.forEach((car) => {
        this.displayCars(car);
      });
    }

    console.log("Show the data successfully");
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  // Method untuk menghapus tampilan mobil
  clear = () => {
    let child = this.resultData.firstElementChild;

    while (child) {
      child.remove();
      child = this.resultData.firstElementChild;
    }

    console.log("Cleared the view successfully");
  };

  show = () => {
    this.clear();
    this.run();
  };
}
