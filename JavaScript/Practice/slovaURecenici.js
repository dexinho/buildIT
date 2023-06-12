// Napravi funkciju koja provjerava da li se sva slova iz drugog stringa nalaze u prvom stringu

function slovaURecenici(recenica, rijec) {
    let brojac = 0
    const novaRecenica = recenica.toLowerCase().split('')
    const novaRijec = rijec.toLowerCase().split('')
    
    while (novaRijec.length > 0) {
      for (let i = 0; i<novaRecenica.length; i++) {
        if (novaRecenica[i] === novaRijec[0]) {
          brojac++
          novaRecenica.splice(i,1)
          break
        }
      }
      novaRijec.shift()
    }

    return rijec.length === brojac
}

console.log(slovaURecenici('eeee12enes', 'EeEe12'))