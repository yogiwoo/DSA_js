//rotate matrix by 90 degree (CLOCKWISE)


/*
        0 1 2
    0   1 4 19
    1   2 5 18
    2   3 6 17

    WILL BE
        0 1 2

    0   3 2 1
    1   6 5 4
    2   17 18 19

    x[0][0] = x [0][2]
    x[0][1] = x[1][2]
    x[0][2] = x[2][2]

    x[1][0] = x[0][1]
    x[1][1] = x[1][1]
    x[1][2]=x[2][1]

    i=i+1
    j=
*/
//TRANSPOSE OF MATRIX
function transpose(matrix){

    let n=matrix.length
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
           let t= matrix[i][j]
           matrix[i][j] = matrix [j][i]
           matrix[j][i] = t
        }
    }
    return matrix;
}

function reverseRow(row){
    let i =0;
    let j=row.length-1;
    while(i<j){
        [row[i],row[j]]=[row[j],row[i]]
        i=i+1;
        j=j-1;
    }
    return row
}
let arr=[4,5,20,1,3,5]

//console.log(reverseRow(arr));

function rotate(matrix){
    let trans=transpose(matrix);
    for(let i =0;i<trans.length;i++){
        let reverseedRow=reverseRow(trans[i])
        matrix[i]=reverseedRow;
    }
    return matrix
}
let x=[
    [1,4,19],
    [2,5,18], 
    [3,6,17]
]

console.log(rotate(x))