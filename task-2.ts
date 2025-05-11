// 2.Task: Object Manipulation
type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "JavaScript for Beginners", author: "Jhankar Mahbub", year: 2021 },
  { title: "React Essentials", author: "Programming Hero Team", year: 2022 },
  { title: "Mastering Full-Stack", author: "PH Engineering Team", year: 2023 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "TypeScript Handbook", author: "Microsoft", year: 2020 },
];

function getBookTitles(books: Book[]): string[] {
  return books.map((book) => book.title);
}

const titles = getBookTitles(books);
