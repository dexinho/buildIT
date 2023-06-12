// Provjera prostog broja: Kreirajte JavaScript funkciju koja koja uzima
// broj kao parametar i provjerava da li je taj broj prost. Prost broj je samo
// djeljiv sa 1 i samim sobom. Funkcija treba da vrati boolean. Testirajte
// funkciju sa različitim brojevima kako biste provjerili njenu tačnost.

const prostiBroj = (broj) => {

    if (broj < 2)
        return false
    else if (broj === 2 || broj === 3)
        return true
    else
        return (broj%2 === 0 || broj%3 === 0) ? false : true
}

console.log(prostiBroj(2))
console.log(prostiBroj(13))
console.log(prostiBroj(100))