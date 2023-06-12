// Izbaci sve elemente iz prvog array sto su parametri drugog arraya

function izbaciElemente(arr1, ...arr2) {
    // return arr1.filter((elemPrvogArraya) => {
    //   for (const elemDrugogArraya of arr2)
    //     if (elemPrvogArraya === elemDrugogArraya)
    //       return false
        
    //     return true
    // })

    return arr1.filter((elem) => !arr2.includes(elem))
  }
  
  console.log(izbaciElemente([1, 2, 3, 1, 2, 3, 5], 3, 2, 4, 1));