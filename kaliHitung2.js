function kaliHitung(angka){
  var ganti = String(angka)
  var count = 0
  if(ganti.length === 1){
    return Number(ganti)
  } else {
    count += Number(ganti[0])
    var ganti2 = ganti.substr(1)
    return count*kaliHitung(ganti2)
  }
}

function kaliTerusRekursif(angka) {
  var ubah = String(angka)
  var hitung = 1
  if(ubah.length === 1){
    return Number(ubah)
  } else {
    var hasilHitung = kaliHitung(angka)
    
    return kaliTerusRekursif(hasilHitung)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6