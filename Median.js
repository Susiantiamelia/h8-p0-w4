function cariMedian(arr) {
  var hitung = 0
  var hasil;

  if(arr.length % 2 !== 0){
    hitung = Math.floor(arr.length / 2)
    hasil = arr[hitung]
  }
  else {
    hitung = arr.length/2
    hasil = (arr[hitung-1]+arr[hitung])/2
  }
  
  return hasil;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5