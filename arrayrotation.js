//rotate array by k elements by right
//[3,4,10,31,16] if k =2 then 10 ,31,,16,3,4
function rotate(arr,k){
    let temp=arr.splice(0,2)
    for(let i of temp){
        arr.push(i)
    }
    return arr
  }
  
  console.log(rotate([4,5,10,2,7,13]))