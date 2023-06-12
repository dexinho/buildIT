// Napišite JavaScript funkciju koja sortira niz brojeva u rastućem ili
// silaznom redoslijedu. Funkcija uzima niz kao parametar i vraća sortiran
// niz kao rezultat. Testirajte funkciju sa različitim nizovima kako biste se
// uvjerili da ispravno generiše sortirani izlaz.

const sortiranjeBrojeva = (nizZaSortiranje, nacin) => {

    if (nacin === 'rastuci')
        return nizZaSortiranje.sort((a, b) => a - b)
    else if (nacin === 'silazni')
        return nizZaSortiranje.sort((a, b) => b - a)
    else   
        return "Izaberite 'rastuci' ili 'silazni' kao drugi parametar"
}

console.log(sortiranjeBrojeva([1,2,5,1,2,10], 'rastuci'))
console.log(sortiranjeBrojeva([1,2,5,1,2,10], 'silazni'))
console.log(sortiranjeBrojeva([1,2,5,1,2,10], 'hmm'))