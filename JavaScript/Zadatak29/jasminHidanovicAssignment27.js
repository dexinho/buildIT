// Napišite funkciju koja uzima niz brojeva kao ulaz i pronalazi medijanu.
// Medijan je srednji element u sortiranom nizu ako niz ima neparan broj
// elemenata, ili prosjek dvaju srednjih elemenata ako niz ima paran broj
// elemenata.

const medijanNiza = (nekiNiz) => {

    if (nekiNiz.every((elem) => typeof elem === 'number')) {
        const sortiraniNiz = nekiNiz.sort((a, b) => a - b)
        if (sortiraniNiz.length%2 === 0)
            return (sortiraniNiz[sortiraniNiz.length/2] + sortiraniNiz[sortiraniNiz.length/2 - 1]) / 2
        else     
            return sortiraniNiz[Math.floor(sortiraniNiz.length/2)]
    }
    else  
        return `${nekiNiz} nije niz brojeva`
}

console.log(medijanNiza([7, 2, 5, 1, 9, 3]))
console.log(medijanNiza([1, 2, 5, 4, 3]))
console.log(medijanNiza(['4th BILD-IT generation had the most success so far']))