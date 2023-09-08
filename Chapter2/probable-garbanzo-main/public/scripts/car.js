class Component {
  constructor() {}

  render() {}
}

class Car extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    super();
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  #formatCurrency(value) {
    const reversedValue = String(value).split("").reverse().join("");
    const groups = reversedValue.match(/.{1,3}/g);
    const formattedValue = groups.join(".").split("").reverse().join("");

    return formattedValue;
  }
  render() {
    return `
      


  <div class="card shadow-sm border-0">
    <div class="card-body card_car">
      <img src="${this.image}" alt="${this.manufacture}" />
      <p>${this.manufacture}</p>
      <h5>Rp ${this.#formatCurrency(this.rentPerDay)} / hari</h5>
      <p class="desc">${this.description}</p>
      <div class="detail_car">
        <img src="assets/img/fi_users.svg" alt="kapasitas" />
        <p>${this.capacity} orang</p>
      </div>
      <div class="detail_car">
        <img src="assets/img/fi_settings.svg" alt="mekanik" />
        <p>${this.transmission}</p>
      </div>
      <div class="detail_car">
        <img src="assets/img/fi_calendar.svg" alt="tanggal" />
        <p>Tahun ${this.year}</p>
      </div>
      <button type="button" class="btn btn-success w-100">Pilih Mobil</button>
    </div>
  </div>
    `;
  }
}
