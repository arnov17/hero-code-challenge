function ShoutOut() {
    return ("halo function");
}
console.log(ShoutOut());
//tugas-2
function calculateMultiply(num1, num2) {
    return (num1 * num2);
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);
//tugas-3
function processSentence(name, age, address, hobby) {
    return ('nama saya ' + name + ', umur saya ' + age + ', alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby);
}
var nama = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';
var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
