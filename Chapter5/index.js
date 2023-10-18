const express = require("express");
const generalController = require("./app/controllers/general");
const carController = require("./app/controllers/cars");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", generalController.home);
app.get("/cars", carController.list);
app.get("/cars/:id", carController.findAndSetById, carController.detail);
app.post("/cars", carController.validationInputCar, carController.create);
app.put("/cars/:id", carController.findAndSetById, carController.validationInputCar, carController.update);
app.delete("/cars/:id", carController.findAndSetById, carController.destroy);
app.get("*", generalController.noPage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
