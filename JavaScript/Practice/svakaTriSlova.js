const svakaTriSlova = nekiString => {

    const nizOdTri = []

    for (let i = 0; i < nekiString.length - 2; i++) {
        nizOdTri.push(nekiString.slice(i, i + 3))
    }

    return nizOdTri

}

console.log(svakaTriSlova('sticky'))