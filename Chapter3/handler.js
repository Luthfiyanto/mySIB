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

  const { name } = req.query;
  const { capacity } = req.query;
  const { rentPerDay } = req.query;
  const { availableAt } = req.query;

  if (name) {
    const car = cars.filter((i) => i.name == name);
    res.status(200).json(car);
  }

  if (capacity) {
    const car = cars.filter((i) => i.capacity == capacity);
    res.status(200).json(car);
  }

  if (rentPerDay) {
    const car = cars.filter((i) => i.rentPerDay == rentPerDay);
    res.status(200).json(car);
  }

  if (availableAt) {
    const car = cars.filter((i) => i.availableAt == availableAt);
    res.status(200).json(car);
  }
  res.status(200).json(cars);
}

function handleGetCar(req, res) {
  const car = Car.find(req.params.id);
  res.status(200).json(car);
}

function handleUpdateCar(req, res) {
  const id = req.params.id;
  const updatedData = req.body;
  const car = Car.update({ id, ...updatedData });
  res.status(200).json(car);
}

function handleDeleteCar(req, res) {
  const carId = req.params.id;
  Car.delete(carId);
  res.status(204).end();
}

function handleErrorPage(req, res) {
  res.status(404).send("404 Page Not Found");
}

module.exports = {
  handleHome,
  handleCreateCar,
  handleListCars,
  handleGetCar,
  handleUpdateCar,
  handleDeleteCar,
  handleErrorPage,
};
