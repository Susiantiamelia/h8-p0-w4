function totalDigitRekursif(angka) {
  var ubah = String(angka)
  var hitung = 0

  if(ubah.length === 1){
    return Number(ubah)
  } else {
    hitung += Number(ubah[0])
    var ubah2 = ubah.substr(1)
    return hitung + totalDigitRekursif(Number(ubah2))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5