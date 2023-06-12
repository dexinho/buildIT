// Koristeci se tehnikom zvanom currying, implementirajte funkciju curry, koja moze
// transformisati funkciju sum koja je data ispod, te omoguciti pozivanje funkcije sum na
// nacin specificiran u primjeru ispod!

const curry = (sumLike) => (arg) => (arg2) => sumLike(arg, arg2);

function sum(a, b) {
    return a + b ;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); // 3 
