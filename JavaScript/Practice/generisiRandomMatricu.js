const generisiRandomMatricu = () => {

    const matrica = []
    let red = 0
    let kolona = 0
    let najmanjiElement = 21

    for (let i = 0; i < 4; i++) {
        matrica[i] = []
        for (let j = 0; j < 5; j++) {
            matrica[i][j] = Math.floor(Math.random() * 11 + 11)
            if (matrica[i][j] <= najmanjiElement) {
                najmanjiElement = matrica[i][j]
                kolona = j + 1
                red = i + 1
            }
        }
    }

    console.log(matrica)

    return `Najmanji element je ${najmanjiElement}. On se nalazi u ${red}. redu i ${kolona}. koloni`
}

console.log(generisiRandomMatricu())