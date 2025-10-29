function kadan(arr){
  let count=0;
  let max=-Infinity;
  for(let i=0;i<arr.length;i++){
    
    count =count+arr[i];
    max=Math.max(count,max);
    if(count<0){
      count=0;
    }
  }
  return max;
}

console.log(kadan([5,6,-1,3,-4,-1]))
