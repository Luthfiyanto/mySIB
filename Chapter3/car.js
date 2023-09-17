const cars = require("./data/carsData.json");
const fs = require("fs");

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
    const data = this.constructor.records;
    const lastRecordId = data[data.length - 1].id === data.length ? data.length + 2 : data.length + 1;

    return lastRecordId.toString();
  }

  static update(params) {
    const idx = this.records.findIndex((i) => i.id === params.id);

    if (idx === -1) {
      throw new Error("Car not found");
    }
    const car = this.records[idx];

    if (params.name !== undefined) car.name = params.name;
    if (params.image !== undefined) car.image = params.image;
    if (params.capacity !== undefined) car.capacity = params.capacity;
    if (params.rentPerDay !== undefined) car.rentPerDay = params.rentPerDay;
    if (params.description !== undefined) car.description = params.description;
    if (params.availableAt !== undefined) car.availableAt = params.availableAt;

    return car;
  }

  static delete(id) {
    this.records = this.records.filter((i) => i.id !== id);
    fs.writeFileSync("./data/carsData.json", JSON.stringify(this.records, null, 2));
  }

  static create(params) {
    const car = new this(params);
    this.records.push(car);
    fs.writeFileSync("./data/carsData.json", JSON.stringify(cars, null, 2));
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
