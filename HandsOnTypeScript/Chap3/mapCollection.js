const mappedEmp = new Map();
mappedEmp.set("linda", { fullName: "Linda Johnson", id: 1 });
mappedEmp.set("shin", { fullName: "Shin Woo", id: 2 });
mappedEmp.set("deong", { fullName: "Deong Goo", id: 4 });

console.log(mappedEmp);
console.log("get", mappedEmp.get("Shin"));
console.log("size", mappedEmp.size);

for (let [key, val] of mappedEmp) {
  console.log("iterate", key, val);
}
