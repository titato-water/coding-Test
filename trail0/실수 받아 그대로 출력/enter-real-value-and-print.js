const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();

if (input) {
    const N = Number(input); 
    
    console.log(N.toFixed(2));
}