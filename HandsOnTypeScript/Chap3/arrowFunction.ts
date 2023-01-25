const myFunc = (message: string): void => {
  console.log(message);
};

myFunc("hello");

const func = () => console.log("func");
const func1 = () => ({ name: "shin" });
const func2 = () => {
  const age = 28;
  return age;
};

console.log(func());
console.log(func1());
console.log(func2());
