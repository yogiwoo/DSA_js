//rotate array by k elements by right
//[3,4,10,31,16] if k =2 then 10 ,31,,16,3,4
// function rotate(arr,k){
//     let temp=arr.splice(0,2)
//     for(let i of temp){
//         arr.push(i)
//     }
//     return arr
//   }
  
//   console.log(rotate([4,5,10,2,7,13]))

function arrayRotation(arr,k){
    let d=k%arr.length;
    let rotated=[]
    let idx=0;
    for(let i=d;i<arr.length;i++){
        rotated[idx]=arr[i];
        idx++
    }
    //now fill the last element to end of the rotated array
    for(let i=0;i<k;i++){
        rotated[idx]=arr[i]
        idx++
    }
    return rotated
}

console.log(arrayRotation([3,4,5,6,7,10],3))