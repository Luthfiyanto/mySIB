const express = require("express");
const { handleHome, handleCreateCar, handleListCars, handleGetCar, handleUpdateCar, handleDeleteCar } = require("./handler");
const { setCar } = require("./middleware");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", handleHome);
app.get("/cars", handleListCars);
app.get("/cars/:id", handleGetCar);
app.post("/cars", handleCreateCar);
app.put("/cars/:id", handleUpdateCar);
app.delete("/cars/:id", handleDeleteCar);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
