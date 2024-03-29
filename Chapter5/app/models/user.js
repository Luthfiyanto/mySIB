"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Car, {
        foreignKey: "createdBy",
        as: "created",
      });
      this.hasMany(models.Car, {
        foreignKey: "updatedBy",
        as: "updated",
      });
      this.hasMany(models.Car, {
        foreignKey: "deletedBy",
        as: "deleted",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please input correct email format",
          },
        },
      },
      encryptedPassword: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      role: { type: DataTypes.ENUM("SUPERADMIN", "ADMIN", "MEMBER"), allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
