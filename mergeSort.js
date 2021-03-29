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

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([4, 3, 2, 6, 55, 4, 7, 6, 8, 4, 12, 23, 100, 9, 8, 70, 6, 54, 34, 333, 4321, 2, 1, 4]))