var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    };
    return Person;
}());
var shin = new Person("hello");
// shin.msg = "hello";
shin.speak();
