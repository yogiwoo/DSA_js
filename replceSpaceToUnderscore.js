function replace(str,i=0){

    if(i>=str.length){return ""}
    
    if(str[i]==" "){
        return "_"+replace(str,i+1)
    }
    else{
        return str[i]+replace(str,i+1)
    }
}


const ans =replace("hello world")

console.log(ans)