function groupAnimals(animals) {
    var huruf = 'abcdefghijklmnopqrstuvwqyz';
    var hasil = [];
    for (var i = 0; i < huruf.length; i++) {
        var temp = [];
        for (var j = 0; j < animals.length; j++) {
            if (animals[j][0] === huruf[i]) {
                temp.push(animals[j]);
            }
        }
        if (temp.length > 0) {
            hasil.push(temp);
        }
    }
    return hasil;
}
// // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
