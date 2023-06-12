// Implementirati rekurzivnu verziju funkcije forEach.

function rekurzivniForEach(arr, callback, index = 0) {

    if (index >= arr.length) 
        return
    
    callback(arr[index], index, arr)
    rekurzivniForEach(arr, callback, index + 1)
}

const nekiArr = [5, 2, 1, 5, 2]

rekurzivniForEach(nekiArr, (elem, index) => console.log(`${index}: ${elem}`))


  