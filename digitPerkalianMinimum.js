function digitPerkalianMinimum(angka) {
  var arr = []
  for(var a=0; a <= angka; a++){
    for(var b=0; b <= angka; b++){
      if(a*b === angka){
        aString = a.toString()
        bString = b.toString()
        arr.push(aString.length+bString.length)
      }
    }
  }
 
  for(var c=0; c < arr.length; c++){

    for(var d=0; d < arr.length; d++){
      if(arr[c] < arr[d]){
        var temp = arr[d]
        arr[d] = arr[c]
        arr[c] = temp
      }
    }
  }

  var akhir = arr[0]
  return akhir;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
