// Napraviti funkciju koja ispisuje uneseni broj redova Pascalovog trougla. Pascalov trougao
// je trougao u kojem su brojevi jednaki sumi dva broja iznad. Funkcija treba da vrati niz u
// kojem ce svaki element biti niz brojeva iz jednog reda Pascalovog trougla.

/*        1
         1 1
        1 2 1
       1 3 3 1
      1 4 6 4 1
    1 5 10 10 5 1    */

function pascalovTrougao(brojRedova) {

    const nizPascal = [[1]]
    const prazanProstor = Array.from({length: brojRedova}, () => ' ')

    if (brojRedova < 1)
        return []
        
    for (let i = 1; i < brojRedova; i++) {
        var nizBrojeva = []
        for (let j = 1; j < i; j++) {
            nizBrojeva[j - 1] = nizPascal[i - 1][j - 1] + nizPascal[i - 1][j]
        }
        console.log(prazanProstor.slice(0, brojRedova - i).join('') + nizPascal[i - 1].join(' '))
        nizPascal.push([1, ...nizBrojeva, 1]) 
    }
    
    console.log(nizPascal[brojRedova - 1].join(' '))

    return nizPascal
}

console.log(pascalovTrougao(5)) // -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
                                //       0    0 1    0 1 2    0 1 2 3    0 1 2 3 4