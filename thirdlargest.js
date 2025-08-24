//better approch besides of sorting
function sec(arr){
    let first=arr[0]
    let sec=-1
    let third=-999
    for(let i of arr){
        if(i>first){
            first=i
        }
    }
    for(let i of arr){
        if(i<first && i>sec){
            sec=i
        }
    }
    for(let i of arr){
        if(i<sec && i>third){
            third=i
        }
    }
    return third
}

console.log(sec([3,24,4,11,9,10]))