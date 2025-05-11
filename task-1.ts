// 1.Task: Array Filtering and Mapping
type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const person: Person[] = [
  { name: "Jannat", age: 24, gender: "female" },
  { name: "Jemi", age: 22, gender: "female" },
  { name: "Jyoti", age: 33, gender: "female" },
  { name: "Evan", age: 28, gender: "male" },
  { name: "Efti", age: 27, gender: "male" },
];

function getMaleNames(person: Person[]): string[] {
  return person
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

const maleNames = getMaleNames(person);
