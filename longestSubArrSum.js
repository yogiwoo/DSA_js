
function fib(n,k){
   let max=0;
   let l=0;
   let r=k-1;
   let sum=0;
   for(let i=0;i<k;i++){
     sum+=n[i]
   }
   console.log(sum)
   while(r<n.length-1){
      sum=sum-n[l]
      l++;
      r++;
      sum+=n[r]
      max=Math.max(max,sum)
   }
   return max
   
}

console.log(fib([-1,2,3,3,4,5,-1],4))