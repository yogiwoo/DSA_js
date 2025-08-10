function convert(str){
    let final=""
    for(let i=0;i<str.length;i++){
        if(i%2!=0){
            final=final+str[i].toUpperCase();
        }
        else{
            final=final+str[i]
        }
    }
    return final
}

let c =convert("hellow")
console.log("=>",c)