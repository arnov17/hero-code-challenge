function balikKata(kata : string) {
    var word : string= ''
    for (var i = (kata.length - 1); i >= 0; i--) {
        word += kata[i]
    }
    return(word)
}
console.log(balikKata('hello world!'))