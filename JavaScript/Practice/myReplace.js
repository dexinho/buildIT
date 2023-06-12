function myReplace(str, before, after) {

    let velikoPrvoSlovo = before[0].toUpperCase()

    if (before[0] === velikoPrvoSlovo) {
        after = after.replace(/^[^]/, after[0].toUpperCase())
    }
    else
        after = after.replace(/^[^]/, after[0].toLowerCase())

    return str.replace(before, after)

  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));