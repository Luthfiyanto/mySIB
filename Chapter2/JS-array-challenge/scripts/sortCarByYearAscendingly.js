function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  let result = cars;
  // Tulis code-mu disini
  let len = cars.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      // Corrected inner loop condition
      if (cars[j - 1].year > cars[j].year) {
        let temp = cars[j - 1];
        cars[j - 1] = cars[j];
        cars[j] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending

  return result;
  // return cars;
}

console.log(sortCarByYearAscendingly(cars));
