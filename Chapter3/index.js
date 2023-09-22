const express = require("express");
const { handleHome, handleCreateCar, handleListCars, handleGetCar, handleUpdateCar, handleDeleteCar, handleErrorPage } = require("./handler");
const { checkDataCar, setCar } = require("./middleware");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", handleHome);
app.get("/cars", checkDataCar, handleListCars);
app.get("/cars/:id", setCar, handleGetCar);
app.post("/cars", handleCreateCar);
app.put("/cars/:id", setCar, handleUpdateCar);
app.delete("/cars/:id", setCar, handleDeleteCar);
app.get("*", handleErrorPage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
