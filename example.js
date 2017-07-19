var calc = require('./index.js')

var price = 1400
var equips = {
  lampu: {
    quantity: 3,
    watt: 20
  },
  setrika: {
    quantity: 1,
    watt: 300
  }
}

console.log(calc(equips, price));
