// Nadji zajednicki najmanji i najveci djelilac

const najmanjiINajveciZajednickiDjelilac = (prviBroj, drugiBroj) => {
    const zajednickiDjelilci = [];
    for(let i = 1; i<Math.max(prviBroj, drugiBroj); i++)
        if(prviBroj%i === 0 && drugiBroj%i === 0)
            zajednickiDjelilci.push(i)

    if (zajednickiDjelilci.length > 1)
        zajednickiDjelilci.shift()
        
    return `najveci: ${zajednickiDjelilci.reduce((najveci, elem) => Math.max(najveci, elem))} 
najmanji: ${zajednickiDjelilci.reduce((najmanji, elem) => Math.min(najmanji, elem))}`



}

console.log(najmanjiINajveciZajednickiDjelilac(3,10))