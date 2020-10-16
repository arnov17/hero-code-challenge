
//Soal -1
var limit : number = 5
for(var start = 1; start <= limit; start++) {
    console.log('*')
}

//soal -2
var baris : string = ''
var limit : number = 5
for (let i = 1; i <= limit; i++) {
    baris += '*';
}
for (let r = 1; r <= limit; r++) {
    console.log(baris);
}


//soal-3
var limit : number = 5
var baris : string = ''
for (let r = 1; r <= limit; r++) {
    baris = ''
    for (let x = 1; x <= r; x++) {
        baris += '*'
    }
    console.log(baris);
}