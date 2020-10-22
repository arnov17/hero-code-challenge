function urutkanAbjad(str : string) {

    var huruf : string = 'abcdefghijklmnopqrstuvwxyz', urutan : string= '';

    for (var i = 0; i < huruf.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (huruf[i] === str[j]) {
                urutan += huruf[i];
            }
        }
    }

    return urutan;

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'