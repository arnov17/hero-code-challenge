function groupAnimals(animals : string[]) {
    var huruf : string = 'abcdefghijklmnopqrstuvwqyz'
    var hasil : string[][] = []
  
    for (let i = 0; i < huruf.length; i++) {
      var temp : string[]= []
      for (let j = 0; j < animals.length; j++) {
        if (animals[j][0] === huruf[i]) {
          temp.push(animals[j])
        }
      }
      if (temp.length > 0) {
        hasil.push(temp)
      }
    }
    return hasil
  }
  
  
  // // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]