const brojUStringu = nizStringova => {

    return nizStringova.filter(string => { 
        for (const char of string)
            if (char >= '0' && char <= '9')
                return true
    })
}

console.log(brojUStringu(['a10', 'a', 'b10', 'b', '10']))