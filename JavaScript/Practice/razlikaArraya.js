// nadji razliku u dva arraya tj. elemente koji se ne nalaze u oba arraya

function razlikaArraya(arr1,arr2) {
    // const finalArr = []

    // for (let i=0; i<Math.max(arr1.length,arr2.length); i++) {
    //     if (!arr1.includes(arr2[i]) && typeof arr2[i] !== 'undefined')
    //         finalArr.push(arr2[i])
    //     if(!arr2.includes(arr1[i]) && typeof arr1[i] !== 'undefined')
    //         finalArr.push(arr1[i]) 
    // }

    // return finalArr 
    
    return arr1.concat(arr2).filter((elem) => !arr1.includes(elem) || !arr2.includes(elem))

}

console.log(razlikaArraya([1,"calf",3,"piglet",5], [1,"calf",3,4]));