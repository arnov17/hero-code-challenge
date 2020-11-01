function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];

  if (arrPenumpang[0] === undefined) {
    return [];
  }

  var hasil = [];

  var jumlahrute = 0;
  var harga = 2000;

  for (i = 0; i < arrPenumpang.length; i++) {
    var obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 0,
    };
    // console.log(obj)

    for (j = 0; j < rute.length; j++) {
      if (rute[j] === obj.naikDari) {
        jumlahrute = j;
      }
      if (rute[j] === obj.tujuan) {
        jumlahrute = jumlahrute - j;

        hasilrute = Math.abs(jumlahrute);
      }
    }
    // console.log(hasirute)
    obj.bayar = hasilrute * harga;

    hasil.push(obj);
  }
  return hasil;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
