// 222 444

const kockicaZaredom = () => {

    let brojBacanja = 0
    let dvaPutaZaredom = 0

    while(dvaPutaZaredom < 2) {
        let randomPrvoBacanje = Math.floor(Math.random() * 6 + 1)
        let randomDrugoBacanje = Math.floor(Math.random() * 6 + 1)
        brojBacanja += 2
        if (randomPrvoBacanje === randomDrugoBacanje) {
            let randomTreceBacanje = Math.floor(Math.random() * 6 + 1)
            brojBacanja++
            if (randomPrvoBacanje === randomTreceBacanje)
                dvaPutaZaredom++
            else
                dvaPutaZaredom = 0
        }
    }

    console.log(brojBacanja)
}

kockicaZaredom()