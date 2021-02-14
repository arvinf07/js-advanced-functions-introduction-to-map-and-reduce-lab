// Your code here

function mapToNegativize(sourceArray){
  let negatives = []
  sourceArray.forEach(num => {
    negatives.push(num * -1)
  })
  return negatives
}

function mapToNoChange(sourceArray){
  return [...sourceArray]
}

function mapToDouble(sourceArray){
  let doubled = []
  sourceArray.forEach(element  => {
    doubled.push(element * 2)
  })
  return doubled
}

function mapToSquare(sourceArray){
  let squared = []
  sourceArray.forEach(element  => {
    squared.push(element**2)
  })
  return squared
}


function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint
  sourceArray.forEach(num =>{
    total += num
  })
  return total
}

function reduceToAllTrue(sourceArray){
  return sourceArray.every(Boolean)
}

function reduceToAnyTrue(sourceArray){
  return sourceArray.some(e => e === true);
}



