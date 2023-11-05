import { useContext, useEffect } from "react";
import { FilterContext } from "./context/FilterContext";
import Card from "./components/Card";
import EmptyCar from "./EmptyCar";

function ListCars() {
  const { car } = useContext(FilterContext);

  console.log(car.length);
  return <article id="result_data">{car.length == 0 ? <EmptyCar /> : car.map((item) => <Card key={item.id} car={item} />)}</article>;
}

export default ListCars;
