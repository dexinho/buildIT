// Implementirati rekurzivnu verziju funkcije flatMapDeep.

const flatMapDeep = (arrToFlatMapDeep, callback) => {
    return arrToFlatMapDeep.flatMap((element) => {
      if (Array.isArray(element)) {
        return flatMapDeep(element, callback)
      } else {
        return callback(element)
      }
    })
  }
  

const randomArr = [11, [2, [3, [4, 6]], 5]]

console.log(flatMapDeep(randomArr, (element) => {
    return element * 2;
}))
  

  