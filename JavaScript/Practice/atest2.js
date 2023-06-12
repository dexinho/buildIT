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

function srediIzraz(nesrednjenIzraz) {

    let izrazBezSpace = nesrednjenIzraz.replace(/\s+/g, '')
    let izrazSaPodesenimPlusomIMinusom = izrazBezSpace.replace(/\-{2}/g, '+').replace(/\++/g, '+').replace(/\+\-|\-\+/g, '-').replace(/\,/, '.')
    let izrazBezMnozenjeDijeljenjePlus = izrazSaPodesenimPlusomIMinusom.replace(/([*/])\+(\d)/g, '$1$2').replace(/\*+/g, '*').replace(/\/+/g, '/')
    let izrazSaUbacenimMnozenjem = izrazBezMnozenjeDijeljenjePlus.replace(/(\d+)(\()/g, '$1*$2').replace(/(\))(\()/, '$1*$2')
    let srednjenIzraz = izrazSaUbacenimMnozenjem.split(/(\d+\.\d+|\-?\d+|\(|\)|sqrt|pow|\^)/)
    srednjenIzraz.unshift('(')
    srednjenIzraz.push(')')
    srednjenIzraz = srednjenIzraz.filter(elem => elem !== '')

    console.log('srednjenIzraz' ,srednjenIzraz)

    return srednjenIzraz
}

const kalkulator = izraz => {

    let konacanIzraz = srediIzraz(izraz)

    let nizOtvorenihIZatvorenihZagrada = konacanIzraz.filter(zagrada => zagrada === '(' || zagrada === ')')
    let nizOtvernihZagrada = []
    let indexZatvoreneZagrade = konacanIzraz.indexOf(')')

    for (let i = 0; i < nizOtvorenihIZatvorenihZagrada.length; i++) {
        if (nizOtvorenihIZatvorenihZagrada[i] === '(') {
            nizOtvernihZagrada.push('(') 
        }
        else if (nizOtvernihZagrada.pop() !== '(')
            return "Zagrade nisu balansirane"
    }
    
    if (nizOtvernihZagrada.length > 0)
        return 'Zagrade nisu balansirane'

    // ( ( ) ( ( ) ) )
    for (let indexOtvoreneZagrade = indexZatvoreneZagrade; indexOtvoreneZagrade >= 0; indexOtvoreneZagrade--) {
        let dioIzraza = []
            if (konacanIzraz[indexOtvoreneZagrade] === '(') {
                // console.log('indexOtvoreneZagrade pred izbacivanje ', indexOtvoreneZagrade)
                // console.log('indexZatvoreneZagrade pred izbacivanje ', indexZatvoreneZagrade)
                konacanIzraz.splice(indexOtvoreneZagrade, 1)
                konacanIzraz.splice(indexZatvoreneZagrade - 1, 1)
                // console.log('Konacni izraz prije' , konacanIzraz)
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
                konacanIzraz = konacanIzraz.flat()
                indexZatvoreneZagrade = konacanIzraz.indexOf(')')
                indexOtvoreneZagrade = indexZatvoreneZagrade
                // console.log('indexOtvoreneZagrade na kraju', indexZatvoreneZagrade)
                // console.log('Dio izraza posle' , dioIzraza)
                // console.log('Konacni izraz posle' , konacanIzraz)
                // console.log('-------------kraj interacije---------------')
        } 
    }


    return `Result of expression ${izraz} is: ${konacanIzraz[0]}`
}

console.log(kalkulator('(3+3)^(3(6/3)+3(5^2)) + 5%2%3 - 5%5*5'))