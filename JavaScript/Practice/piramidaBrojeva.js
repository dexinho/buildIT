// napravi funkciju koja vraca piramidu brojeva. Npr. ako je ulaz 4, treba da vrati
//    1
//   212
//  32123
// 4321234

const piramidaBrojeva = (nekiBroj) => {

    let redoviBrojeva = '1'
    const razmakZaPiramidu = Array.from({length: nekiBroj}, () => ' ')

    for (let i = 1; i <= nekiBroj; i++) {
        console.log(razmakZaPiramidu.slice(0, nekiBroj - i).join('') + redoviBrojeva + redoviBrojeva.split('').reverse().slice(1).join(''))
        redoviBrojeva = i + 1 + redoviBrojeva
    }
}

piramidaBrojeva(5)


