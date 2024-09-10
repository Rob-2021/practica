let a = 4;
let b = 9;

a = a + b; // a = 13, b = 9
b = a - b; // b = 4, a = 13
a = a - b; // a = 9, b = 4

console.log("Primera forma:");
console.log("Variable a: "+a); // 9
console.log("Variable b: "+b); // 4

let A = 4;
let B = 9;

[A, B] = [B, A];
console.log("Segunda forma:");
console.log("Variable A: "+A); // 9
console.log("Variable B: "+B); // 4