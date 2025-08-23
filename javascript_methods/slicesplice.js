//------------------------------------------------SLICE METHOD--------------------------------------------------
/*
    1.Slice method is use to select elements from array
    2.slice method receive two arguments start , end and , element at end index excluded in the output
    3.returns new array doesnt modify original array
    4.
    5.if start is less than end then it returns elements in an array if end index is way larger than the length of array the it still return a
    - element of array from start
    6.-ve element starts from right side of array(end) -1 means end element

*/

//element selection
let arr=[4,5,11,98,3,4,18,25]
// let ans=arr.slice(1,5)   //5,11,98,3
// console.log(ans)


// //-ve element selection
// let ans2=arr.slice(-3,8) //4
// console.log("output for neg selection",ans2)
let ans=arr.slice(-4) //select element from right -4 to all elements
console.log(ans)