const express = require("express");
const generalController = require("./app/controllers/general");
const carController = require("./app/controllers/cars");
const userController = require("./app/controllers/user");
const authMiddleware = require("./app/middlewares/auth");

const app = express();
const PORT = 8000;

app.use(express.json());

// User
app.post("/admin/register", authMiddleware.authorize, userController.registerAdmin);

app.post("/register", userController.register);
app.post("/login", userController.login);

app.get("/", generalController.home);
app.get("/cars", authMiddleware.authorize, carController.list);
app.get("/cars/:id", authMiddleware.authorize, carController.findAndSetById, carController.detail);
app.post("/cars", authMiddleware.authorize, carController.validationInputCar, carController.create);
app.put("/cars/:id", authMiddleware.authorize, carController.findAndSetById, carController.validationInputCar, carController.update);
app.delete("/cars/:id", authMiddleware.authorize, carController.findAndSetById, carController.destroy);
app.get("*", generalController.noPage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
