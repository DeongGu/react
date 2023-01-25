const employees = [
  { name: "shin", id: 1 },
  { name: "seong", id: 2 },
  { name: "woo", id: 3 },
];

const elements = employees.map((item, index) => {
  return `<div>${item.id} - ${item.name}</div>`;
});

console.log(elements);
