Array.prototype.mojSplice = function(start, numberOfElements, ...elementi) {

  const mojSplajcanArray = []
  const kopija = [...this]
  let end = start + numberOfElements
  this.length = 0

  for (let i = start; i < end; i++)
    mojSplajcanArray.push(kopija[i])

  for (let i = 0; i < start; i++)
    this.push(kopija[i])
  
  for (let i = 0; i < elementi.length; i++)
    this.push(elementi[i])

  for (let i = end; i < kopija.length; i++)
    this.push(kopija[i])

  return mojSplajcanArray
}

const nekiArr = [1, 2, 3, 4, 5, 6, 7]
console.log(nekiArr.mojSplice(3, 2, 99, 99, 99, 99))
console.log(nekiArr)