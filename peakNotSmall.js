const arr = [1,2,3];
const pArr = [];

if (arr[0] > arr[1]) {
    pArr.push(arr[0]);
}
for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        pArr.push(arr[i]);
    }
}

if (arr[arr.length - 1] > arr[arr.length - 2]) {
    pArr.push(arr[arr.length - 1]);
}

console.log(pArr);
