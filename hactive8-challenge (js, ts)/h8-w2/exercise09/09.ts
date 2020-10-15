function ShoutOut() {
    return("halo function");
  }
  console.log(ShoutOut())
  
  //tugas-2
  function calculateMultiply(num1 : number, num2 : number) {
    return (num1 * num2);
  }
  
  var num1 : number= 5;
  var num2 : number = 6;

  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian);
  
  
  //tugas-3
  
  function processSentence(name : string, age : number, address : string, hobby : string){
    return('nama saya '+ name + ', umur saya ' + age +', alamat saya di ' + address + ', dan saya punya hobby yaitu ' +  hobby);
  }
  
  var nama : string = 'Agus';
  var age : number= 30;
  var address : string = 'Jln. Malioboro, Yogjakarta';
  var hobby : string = 'gaming';
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence);