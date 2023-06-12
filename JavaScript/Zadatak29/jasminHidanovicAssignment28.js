// Izazov: Brojni uzorak. Napišite funkciju koja uzima broj kao ulaz i
// ispisuje uzorak brojeva koristeći petlju. Na primjer, ako je ulaz 5,
// funkcija treba ispisati sljedeći uzorak:
// 1
// 22
// 333
// 4444
// 55555

function brojniUzorak(nekiBroj) {

    const skupBrojeva = []

    for (let i = 1; i <= nekiBroj; i++) {
        var j = i
        while (j) {
            skupBrojeva.push(i)
            j--
        }
        console.log(skupBrojeva.join(''))
        skupBrojeva.splice(0,i)
    }
}

brojniUzorak(7)
console.log('---------')
brojniUzorak(5)
