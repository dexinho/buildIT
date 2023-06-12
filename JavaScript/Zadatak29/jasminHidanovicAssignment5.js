// Razvijte JavaScript funkciju koja broji broj riječi u datoj rečenici ili
// odlomku. Riječi se odvajaju razmacima. Funkcija uzima string kao
// parametar i treba da vrati broj riječi kao rezultat. Testirajte funkciju sa
// različitim ulaznim rečenicama kako biste provjerili njenu tačnost.

const brojRijeci = (nekiString) => {

    return `Broj rijeci: ${nekiString.split(' ').length}`
}

console.log(brojRijeci('Eldin ima top frizuru ali je cesto krije ispod kape'))
console.log(brojRijeci('dvije rijeci'))