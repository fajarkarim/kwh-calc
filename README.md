# kwh-calc

Simple Calculator for calculate price per kwh and determine your electricity's house rate in Indonesia.

## Install
```
npm install --save kwh-calc
```

## Example
```Javascript
const kwh = require('kwh-calc')

// price in rupiah per kwh
var price = 1400

// list of equipments
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

console.log(kwh(equips, price));
```
