const { Car } = require("../models");
const { validationResult, body } = require("express-validator");

const checkDataById = async (req, res, next) => {
  const id = req.params.id;

  try {
    // const car = await Car.findByPk(id, { attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found!" });
    }
    req.car = car;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const validateCarData = [
  body("name").isString().withMessage("Name must be a string"),
  body("type").isString().withMessage("Type must be a string").isIn(["small", "medium", "large"]).withMessage('Available value must "small" || "medium" || "large" '),
  body("description").isString().withMessage("Type must be a string").isLength({ max: 255 }).withMessage("Description must be at most 255 characters long"),
  body("capacity").isNumeric().withMessage("Type must be a numeric value").isFloat({ min: 1 }).withMessage("Capacity must be a number greater than 0"),
  body("rentPerDay").isNumeric().withMessage("Type must be a numeric value").isFloat({ min: 1 }).withMessage("RentPerDay must be a number greater than 0"),

  (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    next();
  },
];

module.exports = { checkDataById, validateCarData };
