// function insertionSort(arr) {
//   const swap = (arr, idx1, idx2) => (
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   )

//   let sorted = []

//   let i = 1

//   if (arr[i] < arr[i - 1]) {
//     // swap(arr, i, i - 1)
//     sorted.push(arr[i-1, i])
//   }

//   for (let j = 2; j < arr.length; j++) {
//     if (arr[j] < arr[j - 1]) {
//       for (let k = 0; k < sorted.length; k++) {
//         if (arr[j - 1] < arr[k]) {
//           sorted.push(arr[j-1], arr[k])
//         }
//       }
//     }
//   }

//   return sorted

// }

// let arr = [4, 3, 6, 55, 2, 8, 67, 9, 0, 34, 2, 2, 1, -4, 3, 99, -2, -80, 101, 200, 100]

// console.log(insertionSort(arr))

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))
