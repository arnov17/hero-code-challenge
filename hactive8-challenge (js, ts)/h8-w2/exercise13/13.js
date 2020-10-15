function xo(str) {
    var numx = '';
    var numo = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            numx += 1;
        }
        else {
            numo += 1;
        }
    }
    if (numx === numo) {
        return true;
    }
    else {
        return false;
    }
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
