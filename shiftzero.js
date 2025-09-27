function x(arr){
    //initialize j with the 1st 0 of array;
    let j=-1;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==0){
            j=i;
            break;
        }
    }
    console.log(j)
    for(let i=j+1;i<arr.length;i++){
        if(arr[i]!=0){
            [arr[j],arr[i]]=[arr[i],arr[j]]
            j++;
        }
    }
    return arr
}


console.log("array",x([0,1,0,3,12,0,8]))