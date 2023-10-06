const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("")
const sequelize = new Sequelize("db_binar_car_rental_dev", "postgres", "54321", {
  host: "localhost",
  dialect: "postgres",
});

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.log("unable to connect to the database:", error);
  }
};

test();
