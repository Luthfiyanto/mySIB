const { Car } = require("./../models");

exports.getListCars = () => {
  return Car.findAll();
};

exports.getFilteredListCars = (params) => {
  return Car.findAll({ where: params, attributes: ["id", "name", "type", "image", "capacity", "rentPerDay", "description", "availableAt"] });
};

exports.create = (body) => {
  return Car.create(body);
};

exports.findByPk = (id) => {
  return Car.findByPk(id);
};

exports.update = (id, payload) => {
  return Car.update({ ...payload }, { where: { id: id }, returning: true });
};

exports.delete = (id) => {
  return Car.destroy({ where: { id: id } });
};
