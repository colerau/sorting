function selectionSort(arr) {

  const swap = (arr, idx1, idx2) => (
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  )

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, i, min)
    }
  }
  return arr
}

let arr = [4, 3, 6, 55, 2, 8, 67, 9, 0, 34, 2, 2, 1, -4, 3, 99, -2, -80, 101, 200, 100]

console.log(selectionSort(arr))