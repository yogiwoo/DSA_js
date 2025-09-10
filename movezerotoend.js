function move(arr){
    let zeros=0;
    let numbers=[];
    for(let i of arr){
        if(i==0){
           zeros++;
        }
        else{
            numbers.push(i);
        }
    }
    for(let i=0;i<zeros;i++){
        numbers.push(0);
    }
    return numbers;
}


console.log(move([0,1,0,3,12,0,8]))