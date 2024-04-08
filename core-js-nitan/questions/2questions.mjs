let products = [
  {
    id: 1,
    title: "Product 1",
    category: "electronics",
    price: 5000,
    description: "This is description and Product 1",
    discount: {
      type: "other",
    },
  },
  {
    id: 2,
    title: "Product 2",
    category: "cloths",
    price: 2000,
    description: "This is description and Product 2",
    discount: {
      type: "a1",
    },
  },
  {
    id: 3,
    title: "Product 3",
    category: "electronics",
    price: 3000,
    description: "This is description and Product 3",
    discount: {
      type: "a2",
    },
  },
];

// find the array of id ie  output must be [1,2,3]

let ids = products.map((value, i) => {
  return value.id;
});
// console.log(ids);

let titles = products.map((value, i) => {
  return value.title;
});
// console.log(titles);

let price3000 = products.filter((value, i) => {
  if (value.price >= 3000) return true;
});

// if filter and map are used simultaneously , (always use filter first)
let product3000 = products
  .filter((value, i) => {
    if (value.price >= 3000) return true;
  })
  .map((value, i) => {
    return value.title;
  });

console.log(product3000);

// map is used to modify elements of input
// where as filter is used to filter elements of input

let input = [
  { name: "nitan", age: 29 },
  { name: "ram", age: 30 },
  { name: "roshan", age: 31 },
];

/* 

[
    "nitan",
    "ram",
    "roshan"
]

*/
