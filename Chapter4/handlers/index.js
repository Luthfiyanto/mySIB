const { Car } = require("../models");
const { v4: uuidv4 } = require("uuid");

// GET '/'
function handleHome(req, res) {
  res.status(200).send({ message: "ping successfully" });
}

// GET '/cars
async function handleListCars(req, res) {
  const { name, type, capacity, rentPerDay, availableAt } = req.query;

  if (!name && !type && !capacity && !rentPerDay && !availableAt) {
    try {
      const cars = await Car.findAll({ attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });

      if (cars.length == 0) {
        return res.status(404).json({ message: "Data Car is empty!" });
      }
      return res.status(200).json(cars);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  const filter = {};
  if (name) filter.name = name;
  if (type) filter.type = type;
  if (capacity) filter.capacity = capacity;
  if (rentPerDay) filter.rentPerDay = rentPerDay;
  if (availableAt) filter.availableAt = availableAt;

  try {
    const cars = await Car.findAll({ where: filter, attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });
    if (cars.length == 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.status(200).json(cars);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// GET '/cars/:id'
function handleGetCar(req, res) {
  const car = req.car;
  res.status(200).json(car);
}

// POST '/cars'
async function handleCreateCar(req, res) {
  try {
    const car = await Car.create({ id: uuidv4(), ...req.body, createAt: new Date(), updateAt: new Date() });
    return res.status(201).json(car);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// PUT '/cars/:id
async function handleUpdateCar(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const [_, updatedCars] = await Car.update({ ...updatedData, updateAt: new Date() }, { where: { id: id }, returning: true });

    if (_ === 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    const updatedCar = updatedCars[0];
    return res.status(201).json(updatedCar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// DELETE '/cars/:id
async function handleDeleteCar(req, res) {
  const id = req.params.id;
  try {
    await Car.destroy({ where: { id: id } });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

function handleErrorPage(req, res) {
  res.status(404).send("404 Page Not Found");
}

module.exports = {
  handleHome,
  handleListCars,
  handleGetCar,
  handleCreateCar,
  handleUpdateCar,
  handleDeleteCar,
  handleErrorPage,
};
