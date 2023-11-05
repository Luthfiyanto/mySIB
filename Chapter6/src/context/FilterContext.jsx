import { createContext, useState } from "react";
import axios from "axios";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [car, setCar] = useState([]);

  const submitButton = async (payload) => {
    const { date, time, passanger } = payload;
    try {
      setCar([]);

      const res = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
      const cars = res.data;
      const fullDateTime = new Date(`${date} ${time}`);
      console.log(fullDateTime);

      const filteredCars = cars.filter((car) => car.available && car.capacity >= passanger && new Date(car.availableAt).getTime() >= fullDateTime);
      setCar(filteredCars);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCars = async () => {
    try {
      const res = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
      const cars = res.data;
      const filteredCars = cars.filter((car) => car.available);
      setCar(filteredCars);
    } catch (error) {
      console.log(error);
    }
  };

  return <FilterContext.Provider value={{ car, getAllCars, submitButton }}>{props.children}</FilterContext.Provider>;
};

export default FilterContextProvider;
