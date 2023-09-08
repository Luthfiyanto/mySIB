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

  // Fungsi filter
  // filterCars = () => {
  //   const filteredCars = Car.list.filter((car) => {
  //     const carDate = car.convertAvailableDate(car.availableAt)[0];
  //     const carTime = car.convertAvailableDate(car.availableAt)[1];
  //     return car.capacity >= parseInt(this.sumPassanger.value || (carDate <= this.dateRent.value && carTime <= this.timeRent.value));
  //   });
  //   return filteredCars;
  // };

  // Fungsi insert view
  displayCars = (car) => {
    const node = document.createElement("div");
    node.innerHTML = car.render();
    this.resultData.appendChild(node);
  };

  displayEmpty = () => {
    const renderEmpty = `
    <div class="empty">
      <h5>OOOPPSS... No Car is Available</h5>
      <p>Please comeback later or choose another one</p>
    </div>
    `;

    const node = document.createElement("div");
    node.innerHTML = renderEmpty;
    this.resultData.appendChild(node);
  };

  // Method untuk menampilkan mobil
  run = async () => {
    this.clear();
    // const filteredCars = this.filterCars();
    const fullDateTime = new Date(`${this.dateRent.value} ${this.timeRent.value}`);

    if (!this.sumPassanger.value && !this.dateRent.value && !this.timeRent.value) {
      const condition = (i) => i.available === true;
      const cars = await Binar.listCars(condition);
      Car.init(cars);
      Car.list.forEach((car) => {
        this.displayCars(car);
      });
    } else {
      const condition = (i) => i.available && i.capacity >= parseInt(this.sumPassanger.value) && new Date(i.availableAt).getTime() >= fullDateTime;
      const cars = await Binar.listCars(condition);
      Car.init(cars);
      Car.list.forEach((car) => {
        this.displayCars(car);
      });

      if (cars.length === 0) {
        this.displayEmpty();
      }
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
}
