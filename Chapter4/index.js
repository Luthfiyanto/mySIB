const express = require("express");
const { handleHome, handleCreateCar, handleListCars, handleGetCar, handleUpdateCar, handleDeleteCar, handleErrorPage } = require("./handlers");

const { checkDataById, validateCarData } = require("./middleware/checkingDataCar");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", handleHome);
app.get("/cars", handleListCars);
app.get("/cars/:id", checkDataById, handleGetCar);
app.post("/cars", validateCarData, handleCreateCar);
app.put("/cars/:id", checkDataById, validateCarData, handleUpdateCar);
app.delete("/cars/:id", checkDataById, handleDeleteCar);
app.get("*", handleErrorPage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
