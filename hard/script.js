function outerFunction() {
  let pii = "Anthony Zagada";
  console.log(pii);
  function innerfunction() {
    var pii = { ssn: 12345678 };
  }
}

outerFunction();
