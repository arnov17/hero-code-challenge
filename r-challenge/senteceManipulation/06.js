function sentence_manipulation(kalimat) {
  var array = [];
  var baris = "";
  //split manual
  for (i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      array.push(baris);
      baris = "";
    }
    if (i === kalimat.length - 1) {
      baris += kalimat[i];
      array.push(baris);
    }

    if (kalimat[i] !== " ") {
      baris += kalimat[i];
    }
  }

  var hasil = "";
  // console.log(kata)
  for (i = 0; i < array.length; i++) {
    if (
      array[i][0] === "a" ||
      array[i][0] === "i" ||
      array[i][0] === "u" ||
      array[i][0] === "e" ||
      array[i][0] === "o"
    ) {
      hasil += array[i] + " ";
    } else {
      hasil += array[i].substr(1) + array[i][0] + "nyo" + " ";
    }
  }

  return hasil;
}

console.log(sentence_manipulation("ibu pergi ke pasar bersama aku"));
