function intersection(a,b){
//output of repeating element
    let res=[]
    let i=0;j=0;
    while(i<a.length && j<b.length){
         if(a[i]<b[j]) i++

         else if (a[i]>b[j]) j++

         else{
            res.push(a[i])
            i++;
            j++
         }
    }
    return res;
}


console.log(intersection([3,4,5,9],[1,4,5,7]))