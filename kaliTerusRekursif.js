function kaliTerusRekursif(angka) {
  var ubah = String(angka)
  var hitung = 1
  if(ubah.length === 1){
    return Number(ubah)
  } else {
    for(var a=0; a < ubah.length; a++){
      hitung = hitung * Number(ubah[a])
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