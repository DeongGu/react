namespace NamespaceA {
  class A {
    namea: string = "A";
  }

  class B {
    nameb: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b };
  const d = Object.assign(a, b);
  console.log(c);
  console.log(d);

  a.namea = "a1";
  console.log(c);
  console.log(d);
}
