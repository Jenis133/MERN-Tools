const products = [
  {
    id: 1,
    title: "MacBook Pro",
    category: "Laptops",
    price: 100000.0,
    description: "A high-performance laptop.",
    manufactureDate: "2023-05-15T08:30:00",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Nike",
    category: "Running Shoes",
    price: 5000,
    description: "Running shoes designed for speed and comfort.",
    manufactureDate: "2023-02-20T14:45:00",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Python",
    category: "Books",
    price: 500,
    description: "A language for AI",
    manufactureDate: "1925-04-10T10:10:00",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Javascript",
    category: "Books",
    price: 700,
    description: "A language for Browser",
    manufactureDate: "1995-12-04T12:00:00",
    isAvailable: false,
  },
  {
    id: 5,
    title: "Dell XPS",
    category: "Laptops",
    price: 120000.0,
    description: "An ultra-slim laptop with powerful performance.",
    manufactureDate: "2023-04-25T09:15:00",
    isAvailable: true,
  },
];

let productsId = products.map((value, i) => {
  return value.id;
});
let productsTitle = products.map((value, i) => {
  return value.title;
});
let productsCategory = products.map((value, i) => {
  return `${value.title} costs NRS ${value.price} and it's category is ${value.category}`;
});

console.log(productsId);
console.log();
console.log(productsTitle);
console.log();
console.log(productsCategory);
console.log();

let products2000 = products.filter((value, i) => {
  if (value.price > 2000) return true;
});
let _products2000 = products2000.map((value, i) => {
  return value.title;
});
console.log("Products whose price is greater:", _products2000);
console.log();

let productsBooks = products.filter((value, i) => {
  if (value.category === "Books") return true;
});
let _productsBooks = productsBooks.map((value, i) => {
  return value.title;
});
console.log("Products whose category are books:", _productsBooks);
