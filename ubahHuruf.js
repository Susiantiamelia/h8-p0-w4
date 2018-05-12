function ubahHuruf(kata) {
	var dict = 'abcdefghijklmnopqrstuvwxyz'
	var hasil = ''

	for(var a=0; a < kata.length; a++){
	  var index = dict.indexOf(kata[a])
	  hasil = hasil + dict[index+1]
	}

	return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu