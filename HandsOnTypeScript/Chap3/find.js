const items = [
    { name: "shin", age: 28 },
    { name: "deong", age: 30 },
    { name: "goo", age: 29 },
];
const shin = items.find((item) => {
    return item.name === "shin";
});
console.log(shin);
