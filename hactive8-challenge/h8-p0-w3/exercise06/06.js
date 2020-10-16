function angkaPalindrome(num) {
    var Palindrome = false;
    while (Palindrome === false) {
        num++;
        var stringNumber = String(num);
        var temp = '';
        for (var i = stringNumber.length - 1; i >= 0; i--) {
            temp += stringNumber[i];
        }
        var newNumber = Number(temp);
        if (newNumber === num) {
            Palindrome = true;
        }
    }
    return newNumber;
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
