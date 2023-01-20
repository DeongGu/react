class Person {
  constructor(private readonly msg: string) {}
  speak() {
    this.msg = "speak " + this.msg;
    console.log(this.msg);
  }
}

const shin = new Person("hello");
// shin.msg = "hello";
shin.speak();
