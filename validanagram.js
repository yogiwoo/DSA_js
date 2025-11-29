//valid anagram using array counter
function validAnagram(a,b){

    let arr=new Array(26).fill(0);
    let base='a'.charCodeAt(0);

    for(let i=0;i<a.length;i++){
        arr[a.charCodeAt(i)-base]++
        arr[b.charCodeAt(i)-base]--
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 || arr[i]<0){
            return false
        }
    }
    console.log(arr)
    return true
}

console.log(validAnagram('rat','car'))