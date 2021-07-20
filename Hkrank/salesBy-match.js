function sockMerchant(ar) {
    // Write your code here
    let seen = {}
    let uniq = []
    
    // find unique
    for(let i = 0; i < ar.length; i++) {
        if (seen[ar[i]] !== 1) {
            seen[ar[i]] = 1
            uniq.push(ar[i])
        }
    }
    
    // filter lebih dari 1 barang
    let filter = []
    for(let k = 0; k < uniq.length; k++) {
            let  sum = 0
            for(let j = 0; j < ar.length; j++) {
                if(uniq[k] === ar[j]) {
                     sum++
                }
                // filter[uniq[k]] = sum // if result object
             }
             if( sum > 1 ) {
                filter.push({
                    "i" : uniq[k],
                    'n' : sum
                })
             }
            sum = 0
        }

    let result = 0
    filter.forEach((r) => {
        result += Math.floor(r.n / 2)
    })
    return result
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]))