// Napišite funkciju koja prihvata numeričku ocjenu kao ulaz i vraća
// odgovarajuću slovnu ocjenu prema sljedećoj skali:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F

const slovnaOcjena = (numerickaOcjena) => {

    return numerickaOcjena >= 90 && numerickaOcjena <= 100 ? 'A' 
    : numerickaOcjena >= 80 && numerickaOcjena <= 89 ? 'B'
    : numerickaOcjena >= 70 && numerickaOcjena <= 79 ? 'C'
    : numerickaOcjena >= 60 && numerickaOcjena <= 69 ? 'D'
    : numerickaOcjena >= 0 && numerickaOcjena <= 59 ? 'F'
    : typeof numerickaOcjena !== 'number' ? `${numerickaOcjena} nije broj`
    : 'Niste unijeli ocjenu od 0 do 100'
}

console.log(slovnaOcjena(69))
console.log(slovnaOcjena(100))
console.log(slovnaOcjena('programming is fulfilling'))