function Romawi(angka) {
  var nilai = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var huruf = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  var hasil = "";
  for (i = 0; i < nilai.length; i++) {
    while (angka >= nilai[i]) {
      hasil += huruf[i];
      angka -= nilai[i];
    }
  }
  return hasil;
}

console.log(Romawi(4));
console.log(Romawi(9));
console.log(Romawi(13));
console.log(Romawi(1453));
console.log(Romawi(1646));
