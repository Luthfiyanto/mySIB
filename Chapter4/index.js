const express = require("express");
const { handleHome, handleCreateCar, handleListCars, handleGetCar, handleUpdateCar, handleDeleteCar, handleErrorPage } = require("./handlers");

const { fetchCars, checkDataById } = require("./middleware/checkingDataCar");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", handleHome);
app.get("/cars", fetchCars, handleListCars);
app.get("/cars/:id", checkDataById, handleGetCar);
// app.post("/cars", handleCreateCar);
// app.put("/cars/:id", setCar, handleUpdateCar);
// app.delete("/cars/:id", setCar, handleDeleteCar);
app.get("*", handleErrorPage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
