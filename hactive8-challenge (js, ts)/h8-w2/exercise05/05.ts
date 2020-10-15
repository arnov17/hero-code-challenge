//soal-1

var word : string = 'JavaScript';
var second : string = 'is';
var third : string = 'awesome';
var fourth : string = 'and';
var fifth : string = 'I';
var sixth : string = 'love';
var seventh : string = 'it!';

console.log(word + ' ' + second + ' '+ third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh )


// soal-2

var word : string = 'wow JavaScript is so cool';
var exampleFirstWord : string = word[0] + word[1] + word[2];
var secondWord : string = word [4] + word[5] + word[6] + word[7] + word[8] + word [10] + word[11] + word[12] + word [13];
var thirdWord : string = word[15] + word[16];
var fourthWord : string = word[18] + word[19];
var fifthWord : string = word[21] + word[22] + word[23] + word[24]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//soal-3

var word : string = 'wow JavaScript is so cool';
var exampleFirstWord : string = word.substring(0, 3);
var secondWord : string = word.substring(4, 14);
var thirdWord : string = word.substring(15, 17);
var fourthWord : string = word.substring(18, 20);
var fifthWord : string = word.substring(21, 25);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// //soal-4

var word : string = 'wow JavaScript is so cool';
var exampleFirstWord : string = word.substring(0, 3);
var secondWord : string = word.substring(4, 14);
var thirdWord : string = word.substring(15, 17);
var fourthWord : string = word.substring(18, 20);
var fifthWord : string = word.substring(21, 25);

var firstWordLength : number = exampleFirstWord.length;
var secondWordLength : number = secondWord.length;
var thirdWordLength : number = thirdWord.length;
var fourthWordLength : number = fourthWord.length;
var fifthWordWordLength : number = fifthWord.length;


console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ' with length: ' + fifthWordWordLength);
