//Soal-1
console.log('LOOPING PERTAMA');
var counter = 2;
var expression = 2;
while (counter <= 20) {
    console.log(counter + '- I LOVE COODING');
    counter = counter + expression;
}
console.log('LOOPING KEDUA');
var counter = 20;
var expression = 2;
while (counter > 0) {
    console.log(counter + ' - I will become fullstack developer');
    counter = counter - expression;
}
//Soal-2
console.log('LOOPING PERTAMA');
for (var angka = 1; angka <= 20; angka++) {
    console.log(angka + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var angka = 20; angka > 0; angka--) {
    console.log(angka + ' - I love coding');
}
//soal-3
// Ganjil - Genap
var counter = 0;
while (counter < 100) {
    counter++;
    if (counter % 2 == 0) {
        console.log(counter + ' Genap');
    }
    else {
        console.log(counter + ' Ganjil');
    }
}
// Counter penambahan 2
var counter = 1;
var penambahan2 = 2;
while (counter <= 100) {
    if (counter % 3 == 0) {
        console.log(counter + ' kelipatan 3');
    }
    else {
        console.log(counter);
    }
    counter = counter + penambahan2;
}
//Counter penambahan 5
var counter = 1;
var penambahan5 = 5;
while (counter <= 100) {
    if (counter % 6 == 0) {
        console.log(counter + ' kelipatan 6');
    }
    else {
        console.log(counter);
    }
    counter = counter + penambahan5;
}
// Counter penambahan 9
var counter = 1;
var penambahan2 = 9;
while (counter <= 100) {
    if (counter % 10 == 0) {
        console.log(counter + ' kelipatan 10 ');
    }
    else {
        console.log(counter);
    }
    counter = counter + penambahan2;
}
