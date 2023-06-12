// Koristeci se metodom map i funkcijom add definiranom ispod, napisite funkciju koja
// poveca svaku vrijednost u nizu za 1. Pretpostavljamo da je svaki element u nizu koji
// se proslijedjuje kao argument funkcije koju trebate implementirati tipa number.

function add(a, b) {
    return a + b;
}

function povecajZaJedan(arr){

    return arr.map(elem => add(elem, 1))
}

console.log(povecajZaJedan([1, 5, 9]))