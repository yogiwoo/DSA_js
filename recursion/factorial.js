// function fact(n){
//     let temp=n;
//     let fact=1;
//     while(temp>0){
//         fact=fact*temp;
//         temp=temp-1
//     }
//     return fact;
// }

// console.log(fact(0))

function fact(n){
    if(n===0) return 1;

    return n*fact(n-1)
}

console.log(fact(5))