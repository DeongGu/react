// class ClassA {
//   static typeName: string;
//   constructor() {}
//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
// const a = new ClassA();
// console.log(ClassA.typeName);
var a = new Runner("a");
var b = new Runner("b");
b.run();
a.run();
console.log(Runner.lastRunTypeName);
