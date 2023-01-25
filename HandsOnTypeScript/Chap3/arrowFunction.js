var myFunc = function (message) {
    console.log(message);
};
myFunc("hello");
var func = function () { return console.log("func"); };
var func1 = function () { return ({ name: "shin" }); };
var func2 = function () {
    var age = 28;
    return age;
};
console.log(func());
console.log(func1());
console.log(func2());
