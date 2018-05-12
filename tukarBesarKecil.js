function tukarBesarKecil(kalimat) {
	var hasil = '' 
	for(var a=0; a < kalimat.length; a++){
    
	    if(kalimat[a] === kalimat[a].toUpperCase()){
	      hasil += kalimat[a].toLowerCase()
	    } else {
	      hasil += kalimat[a].toUpperCase()
	    }
 	}
	return hasil;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
