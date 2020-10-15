function pasanganTerbesar(num) {
    var numString = String(num);
    var pasanganTerbesar = Number(numString[0] + numString[1]);
    for (var x = 0; x < numString.length - 1; x++) {
        var pasanganAngka = Number(numString[x] + numString[x + 1]);
        if (pasanganAngka > pasanganTerbesar) {
            pasanganTerbesar = pasanganAngka;
        }
    }
    return (pasanganTerbesar);
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
