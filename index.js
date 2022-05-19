class Formatter {
  static capitalize(string){
      let newString = string.charAt(0).toUpperCase() + string.slice(1)
      return newString
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize (string){
    let splitString = string.split(' ')
    let firstWord = splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1)
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from']
  

    for(let i= 1; i<splitString.length; i++){
      if (words.includes(splitString[i])){
          splitString[i]
        }
        else{
          splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1)
        }
    }  

    let newString = splitString.splice(1)
    let updatedString = newString.join(' ')
    return firstWord + ' ' + updatedString
  }
}