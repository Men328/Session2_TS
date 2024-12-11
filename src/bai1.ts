
let numbers: number[] = [];

for (let i: number = 0; i < 10; i++) {
    let input = prompt(`Nhập số nguyên thứ ${i + 1}:`);
}

let count: number = 0;
for (let number of numbers) {
    if (number >= 10) {
        count++;
    }
}

console.log(`Có ${count} số lớn hơn hoặc bằng 10.`);