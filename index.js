const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
const wrote = books.map(
  (book) =>
    book.authorFirst +
    " " +
    book.authorLast +
    " wrote " +
    book.name +
    " in " +
    book.publishDate
);

console.log(wrote);
//Sort books from oldest to most recent
const ordered = books.sort(function (a, b) {
  if (a.publishDate > b.publishDate) {
    return 1;
  } else {
    return -1;
  }
});
console.table(ordered);

//can also do const ordered = books.sort((a,b) => a.publishdate > b.year ? 1: -1);

//sort books alphabetically
const alphabetically = books.sort((book) => book.name);
console.table(alphabetically);
//Find who wrote War and Peace

const author = books.find(function (comment) {
  if (comment.name === "War and Peace") {
    return true;
  }
});
console.log(author);

//how many books were written before 1900?
const written = books.filter((name) => name.publishDate < 1900);
console.table(written);

//const written = books.filter(function(name) {
//if(name.publishDate < 1900) {
//return true;
//}
//});//OLD

//console.table(written);

//was there at least one book published within the last 100 years?
//const published = books.some(function (publishDate) {
//const currentYear = new Date().getFullYear();
//if (currentYear - publishDate.year <= 100) {
//return true;
//}
//});
const published = books.some((publishDate) => {
  const currentYear = new Date().getFullYear();
  return currentYear - publishDate.year <= 100;
});
console.log({ published });
//was every book published within the last 100 years?
