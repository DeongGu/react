function getEmployee(id) {
  return {
    name: "Shin",
    age: 28,
    address: "창원",
    country: "Korea",
  };
}

const { name: fullName, age } = getEmployee(22);
console.log("employee", fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, "Office St", "France"];
}

const [id, OfficeAddress] = getEmployeeWorkInfo(33);
console.log("employee", id, OfficeAddress);
