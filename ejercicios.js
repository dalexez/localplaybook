// let iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value)
// }


const alice = [5, 6, 8]

const bob = [4, 7, 3]

function compareTriplets(a, b){

    let results = [0, 0]
    
    for (var i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            results[0] += 1
        }
        else if(a[i] < b[i]){
            results[1] += 1
        }
    }
    return results
}

console.log(compareTriplets(alice, bob))