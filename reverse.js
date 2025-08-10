function x(x){
    final=""
    for(let i=x.length-1;i>=0;i--){
        final=final+x[i]
    }
    return final
}

console.log(x("ReversE"))