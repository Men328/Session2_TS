let mangSoNguyen: number[] = [12, 45, 7, 23, 56, 89, 34, 21, 10, 5];

let maxNumber = mangSoNguyen[0];
let minNumber = mangSoNguyen[0];
let maxIndex = 0;
let minIndex = 0;

for (let i: number = 1; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] > maxNumber) {
        maxNumber = mangSoNguyen[i];
        maxIndex = i;
    }
    if (mangSoNguyen[i] < minNumber) {
        minNumber = mangSoNguyen[i];
        minIndex = i;
    }
};

console.log(`Phần tử lớn nhất là ${maxNumber} tại vị trí ${maxIndex}.`);
console.log(`Phần tử nhỏ nhất là ${minNumber} tại vị trí ${minIndex}.`);