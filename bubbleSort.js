function bubbleSort(arr) {
  let noSwaps
  let i = arr.length - 1
  while (i >= 0) {
    // console.log(i)
    noSwaps = true
    let j = 0
    while (j < i) {
      // console.log(j)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        noSwaps = false
      }
      j++
    }
    if (noSwaps) {
      break
    }
    i--
  }
  return arr
}

let arr = [4, 3, 6, 55, 2, 8, 67, 9, 0, 34, 2, 2, 1, -4, 3, 99, -2, -80, 101, 200, 100]
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
console.log(bubbleSort(arr1))
// bubbleSort(arr)