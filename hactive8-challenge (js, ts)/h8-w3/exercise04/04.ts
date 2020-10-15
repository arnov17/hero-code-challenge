 
function dataHandling2(input : string[]) {

    input[1] = input[1] + 'Alamsyah'
    input[2] = 'Provinsi ' + input[2]
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(input)

    var bulan : string[] = input[3].split('/')
    console.log(bulan)
    switch (Number(bulan[1])) {
        case 1: { console.log('Januari'); break; }
        case 2: { console.log('Februari'); break; }
        case 3: { console.log('Maret'); break; }
        case 4: { console.log('April'); break; }
        case 5: { console.log('Mei'); break; }
        case 6: { console.log('Juni'); break; }
        case 7: { console.log('Juli'); break; }
        case 8: { console.log('Agustus'); break; }
        case 9: { console.log('September'); break; }
        case 10: { console.log('Oktober'); break; }
        case 11: { console.log('November'); break; }
        case 12: { console.log('Desember'); break; }
    }

    bulan.sort ((function (a, b) { return b - a }))
    console.log(bulan)

    var bulanJoin = input[3].split('/')
    console.log(bulanJoin.join('-'))

    input.splice(1, 1, 'Roman Alamsyah')
    return input[1]

}
var input : string[] = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(dataHandling2(input));