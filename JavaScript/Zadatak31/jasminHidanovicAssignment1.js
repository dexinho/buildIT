// 1. Implementirati funkciju map.

function map(arr, callback) {

    const mappedArr = []

    for (let i = 0; i < arr.length; i++) 
        mappedArr.push(callback(arr[i], i, arr))

    return mappedArr
}



const pomnoziSvakiElement = map([1, 5, 7 , 10, 15], (elem, index) => elem * 2 )

console.log(pomnoziSvakiElement)