// Napišite funkciju koja izračunava sumu svih prostih brojeva manjih od zadane granice.

// console.log(sumPrimes(10)); // Output: 17 (2 + 3 + 5 + 7 = 17)
// console.log(sumPrimes(20)); // Output: 77 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77)

const sumaProstihBrojeva = (granica) => {
    const brojevi = [0]
    if (typeof granica !== 'number')
        return 'Niste unijeli broj'
    for (let i = 2; i<=granica; i++) {
        if (i === 2 || i === 3 || !(i%2 === 0 || i%3 === 0))
            brojevi.push(i)
    }
    return brojevi.reduce((suma, elem) => suma + elem)
}

console.log(sumaProstihBrojeva(1))

