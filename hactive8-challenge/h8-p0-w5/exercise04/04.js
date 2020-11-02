function totalDigitRekursif(angka) {
  var arr = angka.toString();

  if (arr.length === 1) {
    return Number(angka);
  } else {
    var newAngka = Number(arr[0]);
    arr = arr.slice(1);
    return newAngka + totalDigitRekursif(Number(arr));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
