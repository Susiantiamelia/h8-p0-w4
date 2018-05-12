function changeMe(arr) {
  var object = { }
  
  for(var a=0; a < arr.length; a++){
    object.firstName = arr[a][0]
    object.lastName = arr[a][1]
    object.gender = arr[a][2]
    object.age = 2018 - arr[a][3]
    
   if(arr[a][3] === undefined){
     object.age = 'Invalid Birth Year'
   }
   
   console.log(a+1 + '. ' + arr[a][0] + ' ' + arr[a][1] + ':')
   console.log(object)
  }
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
