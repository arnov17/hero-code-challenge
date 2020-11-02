function kaliTerusRekursif(angka) {
  var arr = angka.toString();
  if (arr.length === 1) {
    return Number(angka);
  } else {
    var jumlah = 1;
    for (var i = 0; i < arr.length; i++) {
      jumlah = jumlah * Number(arr[i]);
    }
    return kaliTerusRekursif(jumlah);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
