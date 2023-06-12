// Napišite funkciju koja provjerava je li zadana lozinka sigurna. 
// Lozinka treba zadovoljavati određene kriterije, poput minimalne duljine, prisutnosti slova, brojeva i posebnih znakova.

const sigurnaLozinka = (lozinka) => {
    let prisutnoSlovo = false
    let prisutanBroj = false
    let prisutanZnak = false

    for (let i = 0; i<lozinka.length; i++)
        if (lozinka[i] >= 'a' && lozinka[i] <= 'z' || lozinka[i] >= 'A' && lozinka[i] <= 'Z')
            prisutnoSlovo = true
        else if (lozinka[i] >= '0' && lozinka[i] <= '9')
            prisutanBroj = true
        else
            prisutanZnak = true

    if (prisutnoSlovo && prisutanBroj && prisutanZnak && lozinka.length > 5)
        return true
    else
        return false
        
}

console.log(sigurnaLozinka('selo1!3'))