"use strict";
let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
];
for (let i = 0; i < a.length; i++) {
    let row = "";
    for (let j = 0; j < a[i].length; j++) {
        row += a[i][j];
        if (j < a[i].length - 1) {
            row += ", ";
        }
    }
    console.log(row);
}
