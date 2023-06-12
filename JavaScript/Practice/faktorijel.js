// Napišite funkciju koja izračunava faktorijel zadanih broja.

// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1 = 120)
// console.log(factorial(8)); // Output: 40320 (8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320)

function faktorijel(broj) {

    if (typeof broj !== 'number')
        return 'Niste unijeli broj'
    else if (broj === 0)
        return 1
    else
        return broj * faktorijel(broj-1)
}

console.log(faktorijel(5))