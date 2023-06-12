// Razloži na proste faktore: Kreirajte JavaScript funkciju koja vrši
// razlaganje na proste faktore za dati broj. Razlaganje na proste faktore
// je proces razbijanja broja na njegove proste faktore (prosti brojevi koji
// ravnomjerno dijele originalni broj). Funkcija uzima broj kao parametar, a
// vraca niz prostih faktora kao rezultat.

const razloziNaProsteFaktore = (nekiBroj) => {

    const prostiFaktori = []

    if (typeof nekiBroj !== 'number')
        return 'Niste unijeli broj'

    for (let i = 2; i<=nekiBroj; i++) {
        while(nekiBroj%i === 0) {
            prostiFaktori.push(i)
            nekiBroj /= i
        }
    }

    return prostiFaktori

}

console.log(razloziNaProsteFaktore(140))
console.log(razloziNaProsteFaktore(101))
console.log(razloziNaProsteFaktore('nije broj'))