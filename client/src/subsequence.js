export const allSubsequences = (string, center,storage)=>{
  for(let i = 0;i<string.length;i++){
    for(let k = string.length;k>i;k--){
      let subString = string.substring(i,k)
      if(!storage[subString])storage[subString+center] = true
      for(let j = i;j<k;j++){
        let deleteChar = subString[j]
        let newString = subString.replace(deleteChar,'')
        if(!storage[newString]){
          allSubsequences(newString,center,storage)
        }
      }
    }
  }
  return storage
}

