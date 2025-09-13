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
        //start pushing elements into res array;
        //1. if a and b of thier respective pointer elements are equal then incremenet i and j both
        if(a[i]===b[j]){
            //check wather the last element in the result array is == to the current element at i th index of a array
            //if not then puhs
            if(res[res.length-1]!=a[i]){
                res.push(a[i])
            }
            i++;
            j++;
        }
        //if i is smaller then push i after chechking the last ele of res array is not equal
        else if(a[i]<b[j]){
          if(res[res.length-1]!=a[i]){
                res.push(a[i])
            }
            i++;
        }
        //simillary do for array b with jth index
        else{
            if(res[res.length-1]!=b[j]){
                res.push(b[j])
            }
            j++;
        }
    }
    //iterate the a and b array 
    while(i<a.length){
        if(res[res.length-1]!=a[i]){
                res.push(a[i])
            }
            i++;
    }
    while(j<b.length){
        if(res[res.length-1]!=b[j]){
                res.push(b[j])
            }
            j++;
    }
    return res;
}

console.log(union([2,6,8,11],[1,4,6,8,10,11]))
//UNION [3,2,10,1,4,6]
