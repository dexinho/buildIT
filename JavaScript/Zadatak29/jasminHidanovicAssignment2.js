// Napišite JavaScript funkciju koja uzima broj kao parametar i generiše
// Fibonačijev niz do tog broja. Fibonačijev niz počinje sa 0 i 1, a svaki
// sljedeći broj je zbir prethodna dva. Funkcija treba da vrati niz. Testirajte
// funkciju sa različitim brojevima kako biste provjerili njenu tačnost.

function fibonacijevNiz(broj) {

    let fibNiz = [0]
    let fibBroj = 1

    if (broj<=0)
        return []
    else
        for (let i = 0; i<broj-1; i++) {
            fibNiz.push(fibBroj)
            fibBroj += fibNiz[i]
        }

    return fibNiz
}

console.log(fibonacijevNiz(5))
console.log(fibonacijevNiz(10))