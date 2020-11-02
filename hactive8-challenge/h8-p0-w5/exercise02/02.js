function changeVocals(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "b";
    } else if (str[i] === "i") {
      result += "j";
    } else if (str[i] === "u") {
      result += "v";
    } else if (str[i] === "e") {
      result += "f";
    } else if (str[i] === "o") {
      result += "p";
    } else if (str[i] === "A") {
      result += "B";
    } else if (str[i] === "I") {
      result += "J";
    } else if (str[i] === "U") {
      result += "V";
    } else if (str[i] === "E") {
      result += "F";
    } else if (str[i] === "O") {
      result += "P";
    } else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  var balik = [];

  for (let i = str.length - 1; i >= 0; i--) {
    balik.push(str[i]);
  }

  return balik;
}

function setLowerUpperCase(str) {
  var kata = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      kata += str[i].toLowerCase();
    } else {
      kata += str[i].toUpperCase();
    }
  }
  return kata;
}

function removeSpaces(str) {
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      temp = temp + str[i];
    }
  }
  return temp;
}

function passwordGenerator(name) {
  if (name.length < 5 || name === undefined) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    var ubahVokal = changeVocals(name);
    var balikKata = reverseWord(ubahVokal);
    var lowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(lowerUpper);
    return hapusSpasi;
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
