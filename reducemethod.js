// let arr = [
//   56,1,  2,  3,  4,  5,
//   6,  7,  8,  9];

//largest element to find via reduce

// const ans=arr.reduce((acc,next)=>{
// 	if(next<acc){
// 		return next;
// 	}
// 	return acc
// },arr[0])

// console.log(ans)


//Flat array using reduce
// let matrix=[
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9]
// ]
// const ans=matrix.reduce((acc,next)=>{
// 	acc.push(...next);
// 	return acc;
// },[])

// console.log(ans)

//MINIUM OF ARRAY;
let arr=[34,6,89,45,10]

const ans=arr.reduce((acc,next)=>{
	if(next<acc){
		return next;
	}
	else{
		return acc;
	}
},arr[0])

console.log(ans)