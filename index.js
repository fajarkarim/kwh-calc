
module.exports = function (equips, price) {
  var Table = require('cli-table');
  var table = new Table({
      head: ['No','Equipment', 'total Watts']
  });

  let eqNames = Object.keys(equips)
  let eqLoads = []
  var total = 0
  var a = 0
  var rateQ = [220, 450, 900, 1300, 2200, 3500, 4400, 5500]
  var rateA = [1, 2, 4, 6, 10, 16, 20, 25]

  for (let i = 0; i < eqNames.length; i++) {
    let q = equips[eqNames[i]].quantity
    let w = equips[eqNames[i]].watt
    let tw = q * w
    eqLoads.push(tw)
    total += tw
  }

  a = Math.round(total/220)

  var rate = function (curr) {
    for (let i = 0; i < rateA.length; i++) {
      if (curr > rateA[i]) {
        return rateQ[i]
      }
      return "rate was exceed"
    }
  }

  var generateRow = function (names, loads) {
    for (let i = 0; i < names.length; i++) {
      let rowValue = []
      rowValue.push(i+1, names[i], `${loads[i]} Watt`)
      table.push(rowValue)
    }
  }

  generateRow(eqNames, eqLoads)

  var output = 'Here is your list equipments' +
  `\n` +
  table.toString() +
  `\n` +
  `Your Total Loads : ${total} Watts\n` +
  `price you must pay: Rp.${(total*1/1000) * 1400} per hour\n` +
  `Based on your loads, you need to subcribe to : ${rate(a)} VA Rate\n`

  return output

}
