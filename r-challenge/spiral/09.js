function pola(num) {
  let angka = 0;
  let arr = [];
  for (i = 0; i < num; i++) {
    let temp = [];
    for (j = 0; j < num; j++) {
      temp.push(angka);
      angka++;
    }
    arr.push(temp);
  }
  // console.log(arr)
  let hasil = [];

  let a = 0;
  let b = arr.length;
  let f = arr.length - 1;
  let c = 1;
  let d = 0;
  let e = arr.length - 2;

  while (hasil.length < num * num) {
    for (i = a; i < b; i++) {
      hasil.push(arr[a][i]);
    }
    // atas

    for (i = c; i < b; i++) {
      hasil.push(arr[i][f]);
    }
    // kanan

    for (i = e; i >= d; i--) {
      hasil.push(arr[f][i]);
    }
    // bawah

    for (i = e; i > d; i--) {
      hasil.push(arr[i][d]);
    }
    // kiri

    a++;
    b--;
    c++;
    d++;
    f--;
    e--;
  }

  return hasil;
}

console.log(pola(5));
console.log(pola(6));
console.log(pola(7));
