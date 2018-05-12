function cariModus(arr) {
  var hasil = []
  var count = [] 
  var akhir;

  
  for(var a=0; a < arr.length; a++){
    var index = hasil.indexOf(arr[a])
    if(index === -1){
      hasil.push(arr[a])
      count.push(1)
    } else {
      count[index] =count[index]+1
    }
  }


  for(var c=0; c < count.length; c++){
  
    for(var d=c; d < count.length; d++){
      if(count[c] < count[d]){
        var temp = count[d]
        count[d] = count[c]
        count[c] = temp

        var temp2 = hasil[d]
        hasil[d] = hasil[c]
        hasil[c] = temp2
      } 
    }
  }

  var akhir = hasil[0]
    if(count[0] === count[count.length-1]){
      akhir = -1
    }

  return akhir;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1