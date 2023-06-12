// Napišite funkciju koja prihvata dvije matrice kao ulaz i vrši množenje
// matrica. Matrice su predstavljene kao dvodimenzionalni nizovi, a
// funkcija treba vratiti rezultirajuću matricu.

function pomnoziMatrice(prvaMatrica, drugaMatrica) {

    const pomnozenaMatrica = []
    
    if (prvaMatrica[0].length !== drugaMatrica.length)
        return 'Broj kolona prve matrice mora biti jednak broju redova druge matrice'

    // Svaki puta kada se 'i' promijeni, novi prazan array 'red' se kreira 
    // koji koristmo da sumu ubacimo u njega kako bi taj red ubacili u konacni array

    // Koristimo 3 'for' petlje jer se radi o dvije matrice, gdje je index 'k' zajednicki
    for (let i = 0; i < prvaMatrica.length; i++) {
        var red = []
        for (let j = 0; j < drugaMatrica[0].length; j++) {
            var suma = 0
            for (let k = 0; k < drugaMatrica.length; k++) {
                suma += prvaMatrica[i][k] * drugaMatrica[k][j] 
            }
            red.push(suma)
        }
        pomnozenaMatrica.push(red)
    }
        
    return pomnozenaMatrica
}

console.log(pomnoziMatrice([[1, 2], [4, 5]], [[10, 11, 12], [20, 21, 22]]))
console.log(pomnoziMatrice([[1, 2, 3], [4, 5, 6]], [[10, 11, 12], [20, 21, 22]]))