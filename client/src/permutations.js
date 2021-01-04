const subsequences = {}
export const permutations = (string, center)=>{
  for(let i = 0;i<string.length;i++){
    for(let k = string.length;k>i;k--){
      let subString = string.substring(i,k)
      if(!subsequences[subString])subsequences[subString+center] = true
      for(let j = i;j<k;j++){
        let deleteChar = subString[j]
        let newString = subString.replace(deleteChar,'')
        if(!subsequences[newString]){
          allSubsequences(newString,center)
        }
      }
    }
  }
  return subsequences
}
