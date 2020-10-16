function targetTerdekat(arr : string[]) {
    var posisi_x : number[] = []
    var posisi_o : number[] = []

    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] === 'x'){
            posisi_x.push(i)
        } else if ( arr[i] === 'o') {
            posisi_o.push(i)
        }
    }
    // console.log(posisi_x)
    // console.log(posisi_o)

    if (posisi_x[0] > posisi_o[0] ) {
        return posisi_x[0] - posisi_o[posisi_o.length - 1]
    } 
    else if (posisi_x[0] < posisi_o[0]) {
        return posisi_o[0] - posisi_x[posisi_x.length - 1]
    } 
    else if (posisi_x.length === 0){
        return 0
    }

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2