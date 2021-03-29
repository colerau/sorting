let arr1 = [-2, -1, 0, 3, 4, 5, 6, 7, 8]
let arr2 = [5, 6, 7, 8, 9, 10, 11, 23, 45, 77]

function merge(arr1, arr2) {
  let sorted = []

  // i is pointer for arr1
  let i = 0

  // j is pointer for arr2
  let j = 0
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i])
      i++
    } else {
      sorted.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    sorted.push(arr2[j])
    j++
  }

  return sorted
}

console.log(merge(arr1, arr2))