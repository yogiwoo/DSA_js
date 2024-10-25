const arr = [1,2,3];
const pArr = [];

// Check the first element separately
if (arr[0] > arr[1]) {
    pArr.push(arr[0]);
}

// Loop through elements from index 1 to arr.length - 2
for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        pArr.push(arr[i]);
    }
}

// Check the last element separately
if (arr[arr.length - 1] > arr[arr.length - 2]) {
    pArr.push(arr[arr.length - 1]);
}

console.log(pArr);
