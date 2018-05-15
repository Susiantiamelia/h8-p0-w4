function changeVocals (str) {
  var dictLower = 'abefijopuv'
  var dictUpper = 'ABEFIJOPUV'
  var hasil = ''

  for(var a=0; a < str.length; a++){

	  var index = dictLower.indexOf(str[a])
    var index2 = dictUpper.indexOf(str[a])
    
    if(index !== -1){

      if(index !== dictLower.length-1){

	      hasil = hasil + dictLower[index+1]

      } else {

        hasil = hasil + str[a]
      }

    } else if(index2 !== -1){

      if(index2 !== dictUpper.length-1){

        hasil = hasil + dictUpper[index2+1]

      } else { 

        hasil = hasil + str[a]
      }

    } else {

      hasil = hasil + str[a]
    }

	}

	return hasil;
}



function reverseWord (str) {
  var balik = ''

  for(var b = str.length-1; b >= 0; b--){

    balik += str[b]

  }

  return balik
}



function setLowerUpperCase (str) {

  var ganti = '' 

	for(var c=0; c < str.length; c++){
    
	    if(str[c] === str[c].toUpperCase()){

	      ganti += str[c].toLowerCase()

	    } else {

	      ganti += str[c].toUpperCase()

	    }
 	}

	return ganti;
}



function removeSpaces (str) {

  var remove = ''

  if(str.length <= 5){

    remove += 'Minimal karakter yang diinputkan adalah 5 karakter'

    return remove;
  }

  for(var d=0; d < str.length; d++){

    if(str[d] !== ' '){
      
      remove += str[d]
    }
  }

  return remove;
}

function passwordGenerator (name) {
  var hasilGantiHurif = changeVocals(name)
  var hasilBalikHuruf = reverseWord(hasilGantiHurif)
  var hasilGantiBesarKecil = setLowerUpperCase(hasilBalikHuruf)
  var passwordFix = removeSpaces(hasilGantiBesarKecil)

  return passwordFix;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'