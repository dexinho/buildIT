// Napišite funkciju koja prima string i zamjenjuje sve pojave zadane riječi u stringu s drugom zadatom riječju.

// 'Danas je lijep dan i lijep put.', 'lijep', 'predivan'
// 'Danas je predivan dan i predivan put.

function zamijeniRijecSaDrugomRijeci(recenica, prvaRijec, drugaRijec) {
    const glavnaRecenica = recenica.split(' ')
    for (let i = 0; i<glavnaRecenica.length; i++)
        if (glavnaRecenica[i] === prvaRijec)
            glavnaRecenica.splice(i,1,drugaRijec)

    console.log(glavnaRecenica.join(' '))
}

zamijeniRijecSaDrugomRijeci('Danas je lijep dan i lijep put.', 'lijep', 'enes')