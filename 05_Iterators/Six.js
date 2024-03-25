// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNum = myNums.filter((num) => {
//   return num > 4;
// });

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);

const booksData = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: {
      publisher: "Scribner",
      year: 1925,
    },
    edition: {
      year: 1925,
    },
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    publish: {
      publisher: "Harper Lee",
      year: 1960,
    },
    edition: {
      year: 1960,
    },
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publish: {
      publisher: "Bloomsbury Publishing",
      year: 1997,
    },
    edition: {
      year: 1997,
    },
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: {
      publisher: "Allen & Unwin",
      year: 1937,
    },
    edition: {
      year: 1937,
    },
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: {
      publisher: "Secker & Warburg",
      year: 1949,
    },
    edition: {
      year: 1949,
    },
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: {
      publisher: "T. Egerton, Whitehall",
      year: 1813,
    },
    edition: {
      year: 1813,
    },
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age",
    publish: {
      publisher: "Little, Brown and Company",
      year: 1951,
    },
    edition: {
      year: 1951,
    },
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: {
      publisher: "George Allen & Unwin",
      year: 1954,
    },
    edition: {
      year: 1954,
    },
  },
  {
    title: "Moby-Dick",
    genre: "Adventure",
    publish: {
      publisher: "Richard Bentley (UK)",
      year: 1851,
    },
    edition: {
      year: 1851,
    },
  },
  {
    title: "The Chronicles of Narnia",
    genre: "Fantasy",
    publish: {
      publisher: "Geoffrey Bles",
      year: 1950,
    },
    edition: {
      year: 1950,
    },
  },
  {
    title: "Frankenstein",
    genre: "Gothic",
    publish: {
      publisher: "Lackington, Hughes, Harding, Mavor & Jones",
      year: 1818,
    },
    edition: {
      year: 1818,
    },
  },
  {
    title: "The Picture of Dorian Gray",
    genre: "Gothic",
    publish: {
      publisher: "Ward, Lock and Company",
      year: 1890,
    },
    edition: {
      year: 1890,
    },
  },
  {
    title: "The Adventures of Sherlock Holmes",
    genre: "Detective Fiction",
    publish: {
      publisher: "George Newnes",
      year: 1892,
    },
    edition: {
      year: 1892,
    },
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publish: {
      publisher: "Chatto & Windus",
      year: 1932,
    },
    edition: {
      year: 1932,
    },
  },
  {
    title: "Alice's Adventures in Wonderland",
    genre: "Fantasy",
    publish: {
      publisher: "Macmillan",
      year: 1865,
    },
    edition: {
      year: 1865,
    },
  },
];

const userBooks = booksData.filter((book) => {
  return book.publish.publisher === "Macmillan";
});
console.log(userBooks);
