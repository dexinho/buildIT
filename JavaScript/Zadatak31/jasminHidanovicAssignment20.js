// Napraviti funkciju koja za uneseni string vraća najveći palindromski substring.

const najveciSubstring = uneseniString => {

    let noSpaceSmallLetters = uneseniString.replace(/\s+/g, '').toLowerCase()
    let stringPart = noSpaceSmallLetters[0]
    let counter = 0
    let longestLength = 0
    const palindroms = ['']

    for (let i = 1; i < noSpaceSmallLetters.length; i++) {
        stringPart += noSpaceSmallLetters[i]
        if (stringPart === stringPart.split('').reverse().join('')) {
            palindroms.push(stringPart)
            if (stringPart.length > longestLength)
                longestLength = stringPart.length
        }
        if (i === noSpaceSmallLetters.length - 1) {
            counter++
            i = counter
            stringPart = noSpaceSmallLetters[counter]
        }
    }

    return palindroms.filter(elem => elem.length === longestLength).join(' ili ')
}

console.log(najveciSubstring('BaBcaBa')) // -> “bab” ili “aba”
console.log(najveciSubstring('abbd')) // -> “bb”
console.log(najveciSubstring('aeiou')) // -> “”