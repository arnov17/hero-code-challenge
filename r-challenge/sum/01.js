function sum() {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  console.log(hasil);
}
sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);
