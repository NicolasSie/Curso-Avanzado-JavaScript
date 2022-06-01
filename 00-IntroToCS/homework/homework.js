'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   var array = num.split("").reverse()   //// [1,0]
      
   var binario1 = 0
   var decimal = 0
  
  for (let i = 0; i < array.length; i++) {
       binario1 = array[i] * Math.pow(2,i);
       decimal = decimal + binario1
     }
     return decimal
       
    }
function DecimalABinario(num) {
  // tu codigo aca
  var array = []
  var division = 0
  var resto = 0
  var binnario = ""
while(num > 0){
  division = Math.floor (num/2);
  resto = num %2;
  array.unshift(resto);
  num = division;
}
binnario = array.join("");
return binnario
}
// let suma = ""
// while (num >0) {
// suma = (num%2) + suma
// num= Math.floor(num/2); }
// rerurn suma; 

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}