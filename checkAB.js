function checkAB(str) {
  var str2 = ''
  var a = []
  var b = []
  var hitung = []
  var hasil = true
  
  for(var i=0; i < str.length; i++){
    if(str[i] === 'a'){
      a.push(i)
    } else if(str[i] === 'b'){
      b.push(i)
    }
  }
  
  if(b.length === 0 || a.length === 0){
    hasil = false
    return hasil;
  }
  
  for(var j=0; j < a.length; j++){
    var tampung;
    for(var k=0; k < b.length; k++){
       tampung = (Math.abs(a[j]-b[k]))
      hitung.push(tampung)
    }
  }
  
  for(var m=0; m < hitung.length; m++){
    if(hitung[m] !== 4){
      hasil = false
    } else {
      hasil = true
    }
  }

  return hasil;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
