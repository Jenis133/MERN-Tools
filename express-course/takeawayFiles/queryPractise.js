// Exact searching
[
  { name: "nitan", age: 30, isMarried: false },
  { name: "sandip", age: 25, isMarried: false },
  { name: "nitan", age: 26, isMarried: true },
  { name: "rishav", age: 20, isMarried: false },
  { name: "nitan", age: 30, isMarried: true },
  { name: "chhimi", age: 15, isMarried: true },
  { name: "narendra", age: 27, isMarried: false },
  { name: "shidhant", age: 16, isMarried: false },
  { name: "kriston", age: 22, isMarried: false },
];

// in search value matter, type does not matter
find({}) // This loads all data
  .find({ name: "nitan" })
  .find({ name: "nitan", age: 30 })
  .find({ age: 30 })
  .find({ age: "30" }) // string doesn't matter, still displays number
  .find({ age: 22, isMarried: "false" })

  // number
  .find({ age: 25 }) // []
  .find({ age: { $gt: 25 } }) // greater than
  .find({ age: { $gte: 25 } })
  .find({ age: { $lt: 25 } })
  .find({ age: { $lte: 25 } })
  .find({ age: { $ne: 25 } })

  // find those whose name is nitan, sandip or chhimi
  .find({ name: { $in: ["nitan", "sandip", "chhimi"] } })
  .find({ age: { $in: [25, 30, 35] } }) // age which is 25, 30 or 35
  .find({ age: { $gte: 20, $lte: 30 } }) // age between 20 -30

  //or, and
  .find({ $or: [{ name: "nitan" }, { name: "sid" }] }) // must match one condition
  .find({ $or: [{ name: "nitan", age: 30 }, { name: "sid" }] }) // must match one condition
  .find({ $and: [{ name: "nitan" }, { age: 30 }] }); // must match both condition

// Searching, Sorting, Pagination

// Regex searching or not exact searching
const id = [
  { name: "ni1t", age: 29, isMarried: false },
  { name: "sand2inip", age: 25, isMarried: false },
  { name: "ni", age: 26, isMarried: true },
  { name: "ris3hav", age: 20, isMarried: false },
  { name: "nitan", age: 29, isMarried: true },
  { name: "chhimi", age: 15, isMarried: true },
  { name: "narendran", age: 27, isMarried: false },
  { name: "Nitan", age: 16, isMarried: false },
  { name: "nitanthapa", age: 22, isMarried: false },
];

id.find({ name: "nitan" }); // exact
id.find({ name: /nitan/ });
id.find({ name: /nitan/i }); // insensitive
id.find({ name: /ni/ });
id.find({ name: /^ni/ });
id.find({ name: /ni$/ });

// For sorting
const id1 = [
  { name: "ac", age: 29, isMarried: false },
  { name: "b", age: 40, isMarried: false },
  { name: "ab", age: 50, isMarried: false },
  { name: "ab", age: 60, isMarried: false },
  { name: "c", age: 40, isMarried: false },
];
// output

// irrespective of javascript sort, mongoose sort works on number sort
// .find({}).sort("name") This is ascending sort based on name
// .find({}).sort("-name") This is descending sort based on name
// .find({}).sort("name age") This is ascending sort based on name and then similar names are sort on age
// .find({}).sort("name -age") This is ascending sort based on name and then similar names are descending sort on age

const id2 = [
  { name: "ab", age: 60, isMarried: false },
  { name: "ab", age: 50, isMarried: false },
  { name: "ac", age: 29, isMarried: false },
  { name: "b", age: 40, isMarried: false },
  { name: "c", age: 40, isMarried: false },
];

// number sorting works properly on mongodb unlike js
// .find({}).sort("name")
// .find({}).sort("-name")
// .find({}).sort("name age")
// .find({}).sort("name -age")

// For Pagination

// Skip
[
  { name: "nitan", age: 29, isMarried: false },
  { name: "sandip", age: 25, isMarried: false },
  { name: "nitan", age: 26, isMarried: true },
  { name: "rishav", age: 20, isMarried: false },
  { name: "nitan", age: 29, isMarried: true },
  { name: "chhimi", age: 15, isMarried: true },
  { name: "narendra", age: 27, isMarried: false },
  { name: "shidhant", age: 16, isMarried: false },
  { name: "kriston", age: 22, isMarried: false },
]

  .find({})
  .skip("4") // It skips 4 no of data

  .find({})
  .limit("5")
  .skip("2"); // find({}).skip("2").limit("5")

// Queries works in a particular order.
// The order is => find, sort, select, skip, limit
// Therefore find({}).limit("5").skip("2") works as find({}).skip("2").limit("5")

// output
let output = [
  { name: "nitan", age: 26, isMarried: true },
  { name: "rishav", age: 20, isMarried: false },
  { name: "nitan", age: 29, isMarried: true },
  { name: "chhimi", age: 15, isMarried: true },
  { name: "narendra", age: 27, isMarried: false },
];
