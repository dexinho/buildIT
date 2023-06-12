function translatePigLatin(str) {

    const samoglasnici = ['a', 'e', 'i', 'o', 'u']
    let suglasnici = ''
    
    if (samoglasnici.includes(str[0])) {
        return str + 'way'
    }

    for (const slovo of str) {
        if (samoglasnici.includes(slovo) === false)
            suglasnici += slovo
        else
            break
    }

    return str.split('').slice(suglasnici.length).join('') + suglasnici + 'ay'
  }
  
  console.log(translatePigLatin("cwonsonant"));