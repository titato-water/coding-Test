const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

if (input.length >= 2) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    [a, b] = [b, a];

    console.log(a, b);
}