namespace lets {
  let val1 = 1;
  val1 = 2;

  if (true) {
    let val2 = 3;
    val2 = 3;
  }

  console.log(val1);
  console.log(val2); // let 키워드 변수 범위 블록단위 범위
}
