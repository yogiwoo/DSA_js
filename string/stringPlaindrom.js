//tow pointers i is at start and j is at end
function check(str){
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return false
        }
        i++;
        j--;
    }
    return true;
}


console.log(check("abbaa"))