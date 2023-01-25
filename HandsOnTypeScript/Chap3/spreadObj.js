var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.namea = "A";
        }
    }
    class B {
        constructor() {
            this.nameb = "B";
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b);
    console.log([a]);
    // const d = Object.assign(a, b);
    // console.log(c);
    // console.log(d);
    // a.namea = "a1";
    // console.log(c);
    // console.log(d);
})(NamespaceA || (NamespaceA = {}));
