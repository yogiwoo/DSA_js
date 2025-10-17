//missing product in warehouse
function keyboard(arr){
  let missing=0;
  let min=arr[0]
  let max=-Infinity
  let x=new Set(arr)
  for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
      min=arr[i]
    }
  }
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
  
  for(let i=min;i<=max;i++){
    if(!x.has(i)){
      missing++
    }
  }
  return missing
  
}


console.log(keyboard([10,12,13,8]))