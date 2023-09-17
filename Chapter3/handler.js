const Car = require("./car");

function handleHome(req, res) {
  res.status(200).send({ message: "ping successfully" });
}

function handleCreateCar(req, res) {
  const car = Car.create(req.body);
  res.status(201).json(car);
}

function handleListCars(req, res) {
  const cars = Car.list();
  res.status(200).json(cars);
}

function handleGetCar(req, res) {
  // const car = req.car;
  const car = Car.find(req.params.id);
  res.status(200).json(car);
}

function handleUpdateCar(req, res) {
  const car = Car.update(req.body);
  // Car.update(car);
  res.status(200).json(car);
}

function handleDeleteCar(req, res) {
  const carId = req.params.id;
  Car.delete(carId);
  res.status(204).end();
}

module.exports = {
  handleHome,
  handleCreateCar,
  handleListCars,
  handleGetCar,
  handleUpdateCar,
  handleDeleteCar,
};
