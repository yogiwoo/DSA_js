// function twoSum(arr, t) {
//   //return index of two numbners who's sum is equals to t

//   /*
//         7 1
//         1 2
//         4 3
//         2 4
//     */
//    let m=new Map()
//   for (let i = 0; i < arr.length; i++) {



//     let target=t-arr[i];
//     if(m.has(target)){
//         return [m.get(target),i]
//     }
//     else m.set(arr[i],i)
//   }
// }


//brute force
// function twoSum(arr,t){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             if(arr[i]+arr[j]==t){
//                 return [i,j]
//             }
//         }
//     }
// }

//BEST APPROCH
//chnages array index
function twoSum(arr,t){
    let sorted=arr.sort((a,b)=>a-b);
    let i=0,j=sorted.length-1;
    console.log(sorted)
    while(i<j){
        let tar=sorted[j]+sorted[i]
        if(tar>t){
            j--
        }
        else if(tar<t){
            i++
        }
        else{
            return [i,j]
        }
    }
}

console.log(twoSum([7, 1, 4, 2], 9));
