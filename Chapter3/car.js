const cars = require("./data/carsData.json");

class Car {
  static records = cars;

  constructor(params) {
    this.id = this._generateId().toString();
    this.name = params.name;
    this.image = params.image;
    this.capacity = params.capacity;
    this.rentPerDay = params.rentPerDay;
    this.description = params.description;
    this.availableAt = params.availableAt;
  }

  _generateId() {
    const lastRecordId = this.constructor.records[this.constructor.records - 1]?.id || "0";
    return Number(lastRecordId + 1).toString();
  }

  update(params) {
    const idx = this.constructor.records.findIndex((i) => i.id === this.id);

    params.name && (this.name = params.name);
    params.image && (this.image = params.image);
    params.capacity && (this.capacity = params.capacity);
    params.rentPerDay && (this.rentPerDay = params.rentPerDay);
    params.description && (this.description = params.description);
    params.availableAt && (this.availableAt = params.availableAt);

    this.constructor.records[idx] = this;

    return this;
  }

  delete() {
    this.constructor.records = this.constructor.records.filter((i) => i.id !== this.id);
  }

  static create(params) {
    const car = new this(params);
    this.records.push(car);
    return car;
  }

  static find(id) {
    const car = this.records.find((i) => i.id === id);
    if (!car) return null;
    return car;
  }

  static list() {
    return this.records;
  }
}

module.exports = Car;
