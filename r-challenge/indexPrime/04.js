function indexPrime(param1) {
  var angkaPrima = [];
  // var length = angkaPrima.length
  // console.log(length)
  var angka = 2;

  while (angkaPrima.length < param1) {
    var prime = true;
    for (i = 2; i < angka; i++) {
      if (angka % i === 0) {
        prime = false;
      }
    }

    if (prime) {
      angkaPrima.push(angka);
    }
    angka++;
  }
  console.log(angkaPrima);
  return angkaPrima[angkaPrima.length - 1];
}
console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
