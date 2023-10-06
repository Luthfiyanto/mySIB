const { Car } = require("../models");

// GET '/'
function handleHome(req, res) {
  res.status(200).send({ message: "ping successfully" });
}

// GET '/cars
async function handleListCars(req, res) {
  const { name, type, capacity, rentPerDay, availableAt } = req.query;

  if (req.query) {
    const filter = {};
    if (name) filter.name = name;
    if (type) filter.type = type;
    if (capacity) filter.capacity = capacity;
    if (rentPerDay) filter.rentPerDay = rentPerDay;
    if (availableAt) filter.availableAt = availableAt;

    const cars = await Car.findAll({ where: filter, attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });
    if (cars.length == 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.status(200).json(cars);
  } else {
    const cars = req.car;
    return res.status(200).json(cars);
  }
}

// GET '/cars/:id'
function handleGetCar(req, res) {
  const car = req.car;
  res.status(200).json(car);
}

// POST '/cars'
function handleCreateCar(req, res) {
  // const car = Car.create(req.body);    // still dummy may change
  res.status(201).json(car);
}

// PUT '/cars/:id
function handleUpdateCar(req, res) {
  const id = req.params.id;
  const updatedData = req.body;
  // const car = Car.update({ id, ...updatedData });
  res.status(200).json(car);
}

// DELETE '/cars/:id
async function handleDeleteCar(req, res) {
  const id = req.params.id;
  await Car.destroy({ where: { id } });
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
