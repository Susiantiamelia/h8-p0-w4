function shoppingTime(memberId, money) {

  var item = {}
  item['Sepatu Stacattu'] = 1500000
  item['Baju Zoro'] = 500000
  item['Baju H&N'] = 250000
  item['Sweater Uniklooh'] = 175000
  item['Casing Handphone'] = 50000
  
  var customer = {}
  var Failed = ''
  
  if(memberId === '' || memberId === undefined){
    Failed += 'Mohon maaf, toko X hanya berlaku untuk member saja'
    return Failed;
  } else if (money < item['Casing Handphone']){
    Failed += 'Mohon maaf, uang tidak cukup'
    return Failed;
  } else {
    customer.memberId = memberId
    customer.money = money
    customer.listPurchased = []
    customer.changeMoney = money
  }
  
  for(var keys in item){
    if(item[keys] <= customer.changeMoney){
      customer.listPurchased.push(keys)
      customer.changeMoney -= item[keys]
    }
  }
  
  return customer;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
