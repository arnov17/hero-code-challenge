

function ubahHuruf(kata : string) {
    var abjad : string = 'abcdefghijklmnopqrstuvwxyz'
    
    var hurufBaru : string = ''

    for (var i = 0; i < kata.length; i++) {

        for (var j = 0; j < abjad.length; j++) {
            if (kata[i] === abjad[j]) {
                hurufBaru += abjad[j + 1]
            }
        }
    }

    return hurufBaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu