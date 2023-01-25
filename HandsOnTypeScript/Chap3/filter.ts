const filterItems = [
  { name: "shin", age: 28 },
  { name: "deong", age: 30 },
  { name: "shin", age: 29 },
];

const results = filterItems.filter((item, index) => {
  console.log(index);
  return item.name === "shin";
});

console.log(results);
