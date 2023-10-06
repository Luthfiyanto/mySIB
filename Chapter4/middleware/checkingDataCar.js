const { Car } = require("../models");

const fetchCars = async (req, res, next) => {
  try {
    const cars = await Car.findAll({ attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });

    if (cars.length == 0) {
      res.status(404).json({ message: "Data Car is empty!" });
    }
    req.car = cars;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
    return;
  }
};

const checkDataById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const car = await Car.findByPk(id, { attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });
    req.car = car;
    next();
  } catch (error) {
    res.status(404).json({ message: "Car not found!" });
    return;
  }
};

module.exports = { fetchCars, checkDataById };
