var employees = [
    { name: "shin", id: 1 },
    { name: "seong", id: 2 },
    { name: "woo", id: 3 },
];
var elements = employees.map(function (item, index) {
    return "<div>".concat(item.id, " - ").concat(item.name, "</div>");
});
console.log(elements);
