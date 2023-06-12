const crticeLijevoIDesnoOdSamoglasnika = nekiString => {

    return nekiString.replace(/([aeiou])/gi, '-$1-')
}

console.log(crticeLijevoIDesnoOdSamoglasnika('Hello world'))