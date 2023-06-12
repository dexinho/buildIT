// Napišite funkciju koja prima string i vraća broj riječi u tom stringu. Riječi su odvojene razmakom.

const brojRijeciUStringu = (recenica) => {
    return recenica.split(' ').length
}

console.log(brojRijeciUStringu('ovo je recenica'))