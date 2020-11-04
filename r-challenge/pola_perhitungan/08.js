function pola(str) {
  var split = str.split(" ");
  var string = split[0];
  var array = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      array.push(string.substr(0, i));
      // angka didepan
      array.push(string.substr(i, 1));
      // mencari '#', posisi tengah
      array.push(string.substring(i + 1));
      // angka dibelakang
    }
  }

  // console.log(array)

  var hasil_array = [];
  for (j = 0; j <= 9; j++) {
    array[1] = j;
    var angkaBaru = array[0].concat(array[1], array[2]);
    //   console.log(angkaBaru)
    var perkalian = angkaBaru * split[2];
    //   console.log(perkalian)
    var perkalian_string = perkalian.toString();
    //   console.log(perkalian_string + ' ambil ' + j)
    //   console.log(split[4])

    var hitung = 0;
    for (k = 0; k < perkalian_string.length; k++) {
      if (perkalian_string[k] === split[4][k]) {
        hitung++;
      }
    }

    if (hitung === split[4].length - 1) {
      hasil_array.push(j);
      //     console.log(perkalian_string)
      for (l = 0; l < perkalian_string.length; l++) {
        if (perkalian_string[l] !== split[4][l]) {
          hasil_array.push(Number(perkalian_string[l]));
        }
      }
    }
  }

  return hasil_array;
}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));
