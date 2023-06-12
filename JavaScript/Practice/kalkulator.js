function srediIzraz(nesrednjenIzraz) {

    let izrazBezSpaceIDuplihZagrada = nesrednjenIzraz.replace(/\s+/g, '').replace(/\(\)/g, '')
    let izrazSaPodesenimPlusomIMinusom = izrazBezSpaceIDuplihZagrada.replace(/\-{2}/g, '+').replace(/\++/g, '+').replace(/\+\-|\-\+/g, '-').replace(/\,/, '.')
    let izrazBezMnozenjeDijeljenjePlus = izrazSaPodesenimPlusomIMinusom.replace(/([*/])\+(\d)/g, '$1$2').replace(/\*+/g, '*').replace(/\/+/g, '/')
    let izrazSaUbacenimMnozenjem = izrazBezMnozenjeDijeljenjePlus.replace(/(\d+)(\()/g, '$1*$2').replace(/(\))(\()/, '$1*$2')
    let srednjenIzraz = izrazSaUbacenimMnozenjem.split(/(\-?\d+\.\d+|\-?\d+|\(|\)|sqrt|pow|\^)/)
    srednjenIzraz.unshift('(')
    srednjenIzraz.push(')')
    srednjenIzraz = srednjenIzraz.filter(elem => elem !== '')

    return srednjenIzraz
}

function srediOperaciju(nizZaOperaciju, simbol) {

    while (nizZaOperaciju.includes(simbol)) {
        if (nizZaOperaciju.indexOf('sqrt') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('sqrt')
            nizZaOperaciju.splice(indexSimbola, 2, Math.sqrt(Number(nizZaOperaciju[indexSimbola + 1])))
        }
        else if (nizZaOperaciju.indexOf('pow') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('pow')
            nizZaOperaciju.splice(indexSimbola, 2, Number(nizZaOperaciju[indexSimbola + 1]) * Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('/') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('/')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) / Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('^') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('^')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Math.pow(nizZaOperaciju[indexSimbola - 1], nizZaOperaciju[indexSimbola +1]))
        }
        else if (nizZaOperaciju.indexOf('%') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('%')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) % Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('*') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('*')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) * Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('-') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('-')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) - Number(nizZaOperaciju[indexSimbola + 1]))
        }
        else if (nizZaOperaciju.indexOf('+') !== -1) {
            let indexSimbola = nizZaOperaciju.indexOf('+')
            nizZaOperaciju.splice(indexSimbola - 1, 3, Number(nizZaOperaciju[indexSimbola - 1]) + Number(nizZaOperaciju[indexSimbola + 1]))
        }
    }
}

const kalkulator = (izraz, izracunajBrojDecimala = 0, procesRada = 'no') => {

    let konacanIzraz = srediIzraz(izraz)

    let nizOtvorenihIZatvorenihZagrada = konacanIzraz.filter(zagrada => zagrada === '(' || zagrada === ')')
    let nizOtvernihZagrada = []
    let indexZatvoreneZagrade = konacanIzraz.indexOf(')')
    let brojDecimala = 1

    for (let i = 0; i < nizOtvorenihIZatvorenihZagrada.length; i++) {
        if (nizOtvorenihIZatvorenihZagrada[i] === '(') {
            nizOtvernihZagrada.push('(') 
        }
        else if (nizOtvernihZagrada.pop() !== '(') {
            console.log('Zagrade nisu balansirane')
            return 0 
        }
    }
    
    for (let i = 0; i < izracunajBrojDecimala; i++) {
        brojDecimala *= 10
    }
    
    if (nizOtvernihZagrada.length > 0) {
        console.log('Zagrade nisu balansirane') 
        return 0
    }

    for (let indexOtvoreneZagrade = indexZatvoreneZagrade; indexOtvoreneZagrade >= 0; indexOtvoreneZagrade--) {
        let dioIzraza = []
            if (konacanIzraz[indexOtvoreneZagrade] === '(') {
                konacanIzraz.splice(indexOtvoreneZagrade, 1)
                konacanIzraz.splice(indexZatvoreneZagrade - 1, 1)
                dioIzraza = konacanIzraz.splice(indexOtvoreneZagrade, indexZatvoreneZagrade - indexOtvoreneZagrade - 1)
                for (let indexDijelaIzraza = 0; indexDijelaIzraza < dioIzraza.length; indexDijelaIzraza++) {
                    if (dioIzraza[indexDijelaIzraza] === 'sqrt' || dioIzraza[indexDijelaIzraza] === 'pow' || dioIzraza[indexDijelaIzraza] === '^') {
                        srediOperaciju(dioIzraza, dioIzraza[indexDijelaIzraza])
                        indexDijelaIzraza = 0
                    }
                    else if (dioIzraza[indexDijelaIzraza] === '*' || dioIzraza[indexDijelaIzraza] === '/' || dioIzraza[indexDijelaIzraza] === '%') {
                        srediOperaciju(dioIzraza, dioIzraza[indexDijelaIzraza])
                        indexDijelaIzraza = 0
                    }
                    else if (dioIzraza[indexDijelaIzraza] === '+' || dioIzraza[indexDijelaIzraza] === '-') {
                        srediOperaciju(dioIzraza, dioIzraza[indexDijelaIzraza])
                        indexDijelaIzraza = 0
                    }
                }
                konacanIzraz.splice(indexOtvoreneZagrade, 0, dioIzraza.reduce((sum, elem) => sum + Number(elem), 0))
                indexZatvoreneZagrade = konacanIzraz.indexOf(')')
                indexOtvoreneZagrade = indexZatvoreneZagrade
                if (procesRada === 'yes' && konacanIzraz.length > 1)
                    console.log('= ', konacanIzraz.join(''))
                else if (procesRada === 'yes' && konacanIzraz.length < 2)
                    console.log('= ', Math.round(konacanIzraz.join('') * brojDecimala) / brojDecimala)

        } 
    }

    if (procesRada !== 'yes')
        console.log(izraz, ' = ', Math.round(konacanIzraz[0] * brojDecimala) / brojDecimala)

}

kalkulator('-2.2 + 4*(5+6*(2/1.5)) + (5.25^2)', 2, 'yes') // ('izraz', broj decimala where default is '0', 'process no/yes where default is 'no')
// Covers: '/*%+-^' 'pow' 'sqrt' '()' 'floats' 'ints' and even ',' instead of '.' while not caring about how many spaces there are between each char