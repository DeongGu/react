var filterItems = [
    { name: "shin", age: 28 },
    { name: "deong", age: 30 },
    { name: "shin", age: 29 },
];
var results = filterItems.filter(function (item, index) {
    console.log(index);
    return item.name === "shin";
});
console.log(results);
