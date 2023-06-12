// Napišite JavaScript funkciju koja uzima broj kao ulaz i određuje da li je
// taj broj paran ili neparan. Funkcija uzima broj kao parametar, a treba da
// vrati boolean kao rezultat.

const paranIliNeparan = (nekiBroj) => {

    if (typeof nekiBroj !== 'number')
        return `${nekiBroj} nije broj`
    else
        return nekiBroj%2 === 0
}

console.log(paranIliNeparan(8))
console.log(paranIliNeparan(11))
console.log(paranIliNeparan('#include <iostream>'))