//BRUTE FORCE
// function union(arr1,arr2){
//     let unique=new Map();
//     let result=[]
//     for(let i=0;i<arr1.length;i++){
//         if(!unique.has(arr1[i])){
//             unique.set(arr1[i])
//         }
//     }
//     for(let i=0;i<arr2.length;i++){
//          if(!unique.has(arr2[i])){
//             unique.set(arr2[i])
//         }
//     }
//     for(let [k,v] of unique){
//         result.push(k)
//     }
//     return result;
// }
// console.log(union([2,3,5],[4,3,1]))

//Optimal approch
function union(a,b){
    let i=0,j=0;
    let res=[]
    while(i<a.length && j<b.length){
        if(a[i]==b[j]){
            if(res[res.length-1]!=a[i]){
                res.push(a[i])
            }
            i++;
            j++;
        }
        else if(a[i]<b[j]){
              if(res[res.length-1]!=a[i]){
                 res.push(a[i])
             }
             i++;
         }
        else{
            if(res[res.length-1]!=b[j]){
                
                res.push(b[j])
            }
            j++; 
        }
    }
    while(i<a.length){
        if(res[res.length-1]!=a[i]){
            res.push(a[i])
        }
        i++;
    }
    while(j<b.length){
        if(res[res.length-1]!=b[j]){
            res.push(b[j]);
        }
        j++;
    }
    return res;
}

console.log(union([2,6,8,11],[1,4,6,8,10,11]))
//UNION [3,2,10,1,4,6]
