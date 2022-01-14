function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
function makeInt(n){
    // parseInt(n, 10);
    // return n;
    return parseInt(n, 10);
}
console.log(makeInt("53"));
function preserveDecimal(n){
    // parseFloat(n);
    // return n;
    return parseFloat(n);
}
console.log(preserveDecimal("5.2354512"));
