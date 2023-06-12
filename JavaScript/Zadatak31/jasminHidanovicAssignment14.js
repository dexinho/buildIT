// Napisati funkciju koja uzima string (recenicu) kao parametar, a vraca taj string sa
// kapitaliziranim prvim slovom svake rijeci u recenici.
// Primjer:
// kapitaliziramSlova("Da li je Elvis ziv?") -> "Da Li Je Elvis Ziv?"

const kapitalizirajPrvoSlovo = recenica => {
    
    return recenica.toLowerCase().replace(/(^[a-z]|\s+[a-z])/gi, (match, p1) => p1.toUpperCase())
}

console.log(kapitalizirajPrvoSlovo("Da li je Elvis ziv?"))
console.log(kapitalizirajPrvoSlovo("elvis je VALA    ziv!"))