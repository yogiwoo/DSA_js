//either sort the array and pick 2nd element nested for loop 
//
function find(arr){
    let max=-Infinity;
    let max2=-Infinity;
    for(let i of arr){
        if(i>max){
            max2=max
            max=i;
        }
        else if(i>max2 && i<max){
            max2=i
        }
    }
    if(max2==-Infinity) return null;
    else return max2
}

console.log(find([3,4,29,10]));