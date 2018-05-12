function hitungHuruf(kata) {
  var arr = kata.split(' ')
  var countFix = []

  for(var a=0; a < arr.length; a++){
    var hasil = []
    var count = [] 

    for(var b=0; b < arr[a].length; b++){
      var index = hasil.indexOf(arr[a][b])
      if(index === -1){
        hasil.push(arr[a][b])
        count.push(1)
      } else {
        count[index] =count[index]+1
      }
    }
    
    var tampung = 0
    for(var c=0; c < count.length; c++){
      if(count[c] > 1){
        tampung += 1
      }
    }
    
    countFix.push(tampung)
  }

  for(var d=0; d < countFix.length; d++){
  
    for(var e=d; e < countFix.length; e++){
      if(countFix[d] < countFix[e]){
        var temp = countFix[e]
        countFix[e] = countFix[d]
        countFix[d] = temp
  
        var temp2 = arr[e]
        arr[e] = arr[d]
        arr[d] = temp2
      } 
     
    }
  }
  var akhir = arr[0]
    
  return akhir;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
