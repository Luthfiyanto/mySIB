// import Car from "./car";
const Car = require("./car");

function checkDataCar(req, res, next) {
  const car = Car.list();
  if (car.length == 0) {
    res.status(404).json({ message: "Data Car is empty" });
    return;
  }
  req.car = car;
  next();
}

function setCar(req, res, next) {
  const car = Car.find(req.params.id);
  if (!car) {
    res.status(404).json({ error: "Car not found!" });
    return;
  }
  req.car = car;
  next();
}

module.exports = {
  checkDataCar,
  setCar,
};
