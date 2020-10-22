/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/

function digitPerkalianMinimum(angka : number) {

    var hasilBagi : number= 0 
    var arr : string[]= []
    var arrString : string = ''
    var hasil : number = 0
 
    for (var i = 1; i <= angka; i++) {
       hasilBagi = angka / i;
       arrString = i.toString() + hasilBagi.toString();
 
       // menampung angka yg bukan hasil koma
       if (hasilBagi % 1 === 0) {
          arr.push(arrString)
          console.log(arr)
          
          // memilih hasil perkalian terkecil
          if (hasil === 0) {
             hasil = arrString.length;
          } else {
             if (hasil > arrString.length) {
                hasil = arrString.length;
             }
          }
       }
    }
 
    return hasil;
 }
 
 // TEST CASES
 console.log(digitPerkalianMinimum(24)); // 2
 console.log(digitPerkalianMinimum(90)); // 3
 console.log(digitPerkalianMinimum(20)); // 2
 console.log(digitPerkalianMinimum(179)); // 4
 console.log(digitPerkalianMinimum(1)); // 2