
export function isUnique(array: any[], index: number, amount:number) {
  const uniqueCharacters = new Set<string>()

  for (let i = 0; i < amount; i++) {
   uniqueCharacters.add(array[index + i])
   console.log(uniqueCharacters)
  }

  if(uniqueCharacters.size === 4){
    return true
  } else {
    return false
  }
}

export function tuningTrouble(data: string, amount: number) {
  const dataArray = data.split('')
  let result = 0

  for (let i = 0; i < dataArray.length; i++) {
    if(isUnique(dataArray, i, amount)){
      result = i + amount
      break;
    }
    
  }
  return result
}
