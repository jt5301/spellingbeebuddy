/* Heaps Algorithm */
export const permutations = (wordArr)=>{
  const returnPerms = []
  const swapInPlace = (swapArr,indexA,indexB) =>{
    const temp = swapArr[indexA]
    swapArr[indexA] = swapArr[indexB]
    swapArr[indexB] = temp
  }
  const generate = (n,heapArr)=>{
    if(n===1){
      returnPerms.push(heapArr.slice().join(''))
      return
    }
    generate(n-1,heapArr)
    for(let i = 0;i<n-1;i++){
      if(n%2 ===0)swapInPlace(heapArr,i,n-1)
      else swapInPlace(heapArr,0,n-1)
      generate(n-1,heapArr)
    }
  }
  generate(wordArr.length,wordArr.slice())
  return returnPerms
}
