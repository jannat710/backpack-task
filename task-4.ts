// 4.Task: Sorting Objects
type Car = {
  make: string;
  model: string;
  year: number;
};

const cars: Car[] = [
  { make: "Chevrolet", model: "Impala", year: 2017 },
  { make: "Tesla", model: "Model S", year: 2022 },
  { make: "Nissan", model: "Altima", year: 2015 },
  { make: "Audi", model: "A4", year: 2020 },
  { make: "Kia", model: "Optima", year: 2019 },
];

function sortCarsByYear(carList: Car[]): Car[] {
  return carList.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
const sortedModels = sortedCars.map((car) => car.model);
