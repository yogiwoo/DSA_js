function getMap(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i],1)
        }
    }
    return map;
}

console.log(getMap([1,2,3,4,5,1,2,3,4,5,1,2,3])); // Map { 1 => 3, 2 => 3, 3 => 3, 4 => 2, 5 => 2 }