// Find the array of id ie output must be [1,2,3]
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

let ids = products.map((value, i) => {
    return value.id;
});
// console.log(ids);

// Find the array of title ie output must be ["Product 1", "Product 2", "Product 3"]
let titles = products.map((value, i) => {
    return value.title;
});
// console.log(titles);

// Find the array of category
let categorys = products.map((value, i) => {
    return value.category;
});
// console.log(categorys);

// Find the array of type
let types = products.map((value, i) => {
    return value.discount.type;
});
// console.log(types);

// Find the array of price where each price is multiplied by 3 output must be [ 15000,6000,9000]
let prices = products.map((value, i) => {
    return (value.price * 3);
});
// console.log(prices);

// find those array of title whose price is >= 3000 => [
let pricesSort = products.filter((value, i) => {
    if (value.price >= 3000) return true;
});
// console.log(pricesSort);


// Try to make code as less as possible
// If there's only one line of code within a scope of a ifElse function then there's no need to write it inside ({})

// Find those array of title whose price is >= 3000=> ["product 1","product 3"]
let prices3000 = products
.filter((value, i) => {
    if (value.price >= 3000) return true;
})
.map((value,i) => {
    return value.title;
});
// console.log(prices3000);
// console.log();
// If Filter and Map are used simultaneously, (always use filter first)

// Find those array of title whose price does not equal to 5000 ==> ["product 2","product 3"]
let prices5000 = products
.filter((value, i) => {
    if (value.price !== 5000) return true;
})
.map((value,i) => {
    return value.title;
});
// console.log(prices5000);
console.log();

// find those category in an array whose price equal to 3000 ====> ["electronics"]
let category3000 = products
.filter((value, i) => {
    if (value.price === 3000) return true;
})
.map((value,i) => {
    return value.category;
});
console.log(category3000);

// Map is used to modify element of input whereas Fiter is used to filter element of input