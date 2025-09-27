// function findMissing(arr){
//     let hash=[]
//     for(let i =0;i<arr.length;i++){
//         hash.push(0)
//     }
//     console.log(hash)
//     for(let i=0;i<arr.length;i++){
//         hash[arr[i]]=1;
//     }
//     console.log(hash)
//     for(let i=0;i<hash.length-1;i++){
//         if(hash[i]==0){
//             return i
//         }
//     }
// }


// const x=findMissing([1,3,4,5,6])
// console.log(x)
function findMissing(arr) {
    // Create a hash array with size max(arr) + 1 or arr.length + 1
    let max = Math.max(...arr); // Find the maximum value in arr
    let hash = new Array(max + 1).fill(0); // Initialize hash array with zeros
    console.log(hash); // [0, 0, 0, 0, 0, 0, 0] (size 7 for max=6)

    // Mark present numbers in hash
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = 1; // Mark arr[i] as present
    }
    console.log(hash); // [0, 1, 0, 1, 1, 1, 1]

    // Find the first unmarked index (missing number)
    for (let i = 1; i <= max; i++) { // Start from 1 since sequence starts at 1
        if (hash[i] === 0) {
            return i;
        }
    }
    return -1; // Return -1 if no missing number is found
}

const x = findMissing([1, 3, 4, 5, 6]);
console.log(x); // Output: 2