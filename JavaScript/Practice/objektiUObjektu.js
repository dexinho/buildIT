// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and 
// value pairs (second argument). Each name and value pair of the 
// source object has to be present in the object from the collection 
// if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// and the second argument is { last: "Capulet" }, then you must return the 
// third object from the array (the first argument), because it contains 
// the name and its value, that was passed on as the second argument.

// function objektiUObjektu(prviObjekat, drugiObjekat) {

//     const matchingObjects = []
//     let brojac = 0

//     for (let i = 0; i < prviObjekat.length; i++) {
//         for (const prviKey in prviObjekat[i]) {
//             for (const drugiKey in drugiObjekat) {
//                 if (drugiKey === prviKey) {
//                     if (prviObjekat[i][prviKey] === drugiObjekat[drugiKey]) {
//                         brojac++
//                     }
//                 }
//             }
//         }
//         if (brojac === Object.keys(drugiObjekat).length)
//             matchingObjects.push(prviObjekat[i])
//         brojac = 0
//     }

//     return matchingObjects
// }

// console.log(objektiUObjektu([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))

function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source)
    const finalArr = []

    return collection.filter((collectionKeys) => {
       return sourceKeys.every( sourceKey => {
            return collectionKeys.hasOwnProperty(sourceKey) && collectionKeys[sourceKey] === source[sourceKey]
       })
    }) 
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));