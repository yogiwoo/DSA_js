function minwinsub(s, t) {
    if(s.length===0 || t.length===0) return "";
    let minlen=Infinity;
    let sIndex=-1
   for(let i=0;i<s.length;i++){

    let hash=new Array(256).fill(0);
    let count=0;
    for(let j=0;j<t.length;j++){
        hash[t[j].charCodeAt(0)]++;
    }
    for(let j=i;j<s.length;j++){
        let chCode=s[j].charCodeAt(0)
        if(hash[chCode]>0){
            count++
        }
        hash[chCode]--
        if(count===t.length){
            if(j-i+1 <minlen){
                minlen=j-i+1;
                sIndex=i
            }
            break;
        }
    }
    if(sIndex===-1) return "";
    return s.substring(sIndex,sIndex+minlen)
   }
   

}

console.log(minwinsub("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minwinsub("a", "a")); // "a"
console.log(minwinsub("ab", "ba")); // "ab"
console.log(minwinsub("", "a")); // ""
