
let mang: number[] = [];

let inputSize = prompt("Nhập số lượng phần tử của mảng:");

    for (let i:number = 0; i < mang.length; i++) {
        let input = prompt(`Nhập số nguyên thứ ${i + 1}:`);
    }

    console.log("Mang ban dau: ");
    console.log(mangSoNguyen);

    let reversedNumbers: number[] = [];
    for (let i = mang.length - 1; i >= 0; i--) {
        reversedNumbers.push(mang[i]);
    }

    console.log("Mang sau khi da dao nguoc");
    console.log(reversedNumbers);
   
