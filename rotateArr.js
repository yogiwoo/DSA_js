//rotate arra without using extra space
function rotate(arr,i,j){
    // let i=0;
    // let j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i++;
        j--;
    }
    return arr;
}


function main(){
    let arr=[3,4,5,6,7,8];
    let d=3;
    rotate(arr,0,d-1);
    rotate(arr,d,arr.length-1);
    let ans=rotate(arr,0,arr.length-1);
    return ans;
}

console.log(main())