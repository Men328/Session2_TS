"use strict";
let arr = new Array(10);
for (let i = 0; i < 10; i++) {
    arr[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
}
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp theo thứ tự giảm dần là:");
console.log(arr);
