function urutkanAbjad(str) {
  var arr = []
  var hasil = ''

  for(var a=0; a < str.length; a++){
    arr.push(str[a])
  }

  for(var c=0; c < arr.length; c++){
 
    for(var d=0; d < arr.length; d++){
      
      if(arr[c] < arr[d]){
        var temp = arr[c]
        arr[c] = arr[d]
        arr[d] = temp
      }
    }
  }
  

  for(var b=0; b < arr.length; b++){
    hasil = hasil + arr[b]
  }
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'