var fs = require('fs');

function listPrimes( numberOfPrimes ) {
  var arrayOfPrimes = [];
  for( var num = 2;  numberOfPrimes > 0;  num++ ) {
    if( isPrime(num) ) {
      arrayOfPrimes.push( num );
      --numberOfPrimes;
    }
  }
  return arrayOfPrimes;
}
function isPrime( number ) {
  var maxPrime = Math.sqrt(number);
  for( var i = 2;  i <= maxPrime;  i++ ) {
    if( number % i === 0 )
      return false;
  }
  return true;
}

console.log(listPrimes(100))
fs.writeFileSync( '100primes.txt', listPrimes(100) );
