function mojaMapa(arr, callback, index = 0) {

  const arrMap = []

  if (index >= arr.length)
    return []

  const remainingValues = mojaMapa(arr, callback, index + 1)
  console.log('rekurzija')
  const mappedValue = callback(arr[index], index, arr)
  return [mappedValue, ...remainingValues]
}

console.log(mojaMapa([1, 5, 9], elem => elem * 2))