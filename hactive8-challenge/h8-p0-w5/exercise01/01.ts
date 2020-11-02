
function sorting(arrNumber : number[]) {
  return arrNumber.sort()
}

function getTotal(arrNumber : number[]) {
  var angkaTerbesar = arrNumber[0]
  var jumlah = 0

  for (var i = 1; i < arrNumber.length; i++) {
    var angka = arrNumber[i]

    if (angka > angkaTerbesar) {
      angkaTerbesar = angka
    }
  }

  for (var j = 0; j < arrNumber.length; j++){
    if (angkaTerbesar === arrNumber[j]) {
      jumlah++
    }
  }

  
  var hasil = 'angka paling besar adalah ' + angkaTerbesar + ' dan jumlah kemunculan sebanyak ' + jumlah + ' kali';

  if (arrNumber.length === 0) {
    return ''
  } else {
    return hasil
  }
}

function mostFrequentLargestNumbers(arrNumber : number[]) {
  var listSort : number[] = sorting(arrNumber);
  var countHighest : string = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
 //''