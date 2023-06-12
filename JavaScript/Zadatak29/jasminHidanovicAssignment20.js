// Napišite funkciju koja prihvata broj kao ulaz i vraća "Fizz" ako je broj
// djeljiv sa 3, "Buzz" ako je djeljiv sa 5, i "FizzBuzz" ako je djeljiv sa i sa 3 i
// sa 5. Ako broj nije djeljiv ni sa 3 ni sa 5, vratite sam broj.

function fizzBuzz(nekiBroj) {

    return nekiBroj % 3 === 0 && nekiBroj % 5 === 0 ? 'FizzBuzz'
    : nekiBroj % 3 === 0 ? 'Fizz'
    : nekiBroj % 5 === 0 ? 'Buzz'
    : typeof nekiBroj !== 'number' ? `${nekiBroj} nije broj`
    : nekiBroj
}

console.log(fizzBuzz(15))
console.log(fizzBuzz(25))
console.log(fizzBuzz(9))
console.log(fizzBuzz(13))
console.log(fizzBuzz('BILD-IT ekipa je divna'))