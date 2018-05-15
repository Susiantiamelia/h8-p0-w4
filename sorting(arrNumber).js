function sorting(arrNumber) {

  for(var c=0; c < arrNumber.length; c++){

    for(var d=0; d < arrNumber.length; d++){
      if(arrNumber[c] > arrNumber[d]){
        var temp = arrNumber[d]
        arrNumber[d] = arrNumber[c]
        arrNumber[c] = temp
      }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  var cek = []
  var total = []
  var hasil = ''

  if(arrNumber.length === 0){
    return hasil;
  }

  for(var a=0; a < arrNumber.length; a++){
    var index = total.indexOf(arrNumber[a])
    if(index === -1){
      total.push(arrNumber[a])
      cek.push(1)
    } else {
      cek[index] =cek[index]+1
    }
  }

  hasil += 'angka paling besar adalah ' + total[0] + ' dan jumlah ' + cek[0] + ' kali'
  return hasil
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
