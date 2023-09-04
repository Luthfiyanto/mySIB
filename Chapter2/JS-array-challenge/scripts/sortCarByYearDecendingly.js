function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  // const result = [...cars];
  let result = cars;

  // Tulis code-mu disini
  let len = cars.length;
  let isSwapped = false;
  for (let i = len - 1; i >= 0; i--) {
    isSwapped = false;
    for (let j = 1; j <= i; j++) {
      // Corrected inner loop condition
      if (cars[j - 1].year < cars[j].year) {
        let temp = cars[j - 1];
        cars[j - 1] = cars[j];
        cars[j] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}

console.log(sortCarByYearDescendingly(cars));
