function kaliTerusRekursif(angka) {
  var angkaString = String(angka)
  var hitung = 1
  if(angkaString.length === 1){
    return Number(angkaString)
  } else {
    for(var a=0; a < angkaString.length; a++){
      hitung = hitung * Number(angkaString[a])
    }
    
    return kaliTerusRekursif(hitung)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6