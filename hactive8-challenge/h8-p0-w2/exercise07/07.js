//Soal -1
var limit = 5;
for (var start = 1; start <= limit; start++) {
    console.log('*');
}
//soal -2
var baris = '';
var limit = 5;
for (var i = 1; i <= limit; i++) {
    baris += '*';
}
for (var r = 1; r <= limit; r++) {
    console.log(baris);
}
//soal-3
var limit = 5;
var baris = '';
for (var r = 1; r <= limit; r++) {
    baris = '';
    for (var x = 1; x <= r; x++) {
        baris += '*';
    }
    console.log(baris);
}
