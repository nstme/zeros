module.exports = function zeros(expression) {
  
  function factorial(n) {
    return (BigInt(n) != 1n) ? BigInt(n) * factorial(BigInt(n) - 1n) : 1n;
  }

  function doubleFactorial(n) {
    return (BigInt(n) >= 1n) ? BigInt(n) * doubleFactorial(BigInt(n) - 2n) : 1n;
  }

  let array = expression.split('*');

  let factArray = array.map(item => {
    if (item.slice(-2) === '!!') {
      return BigInt(doubleFactorial(parseInt(item)));
    }
    return BigInt(factorial(parseInt(item)));
  });

  mult = BigInt(factArray.reduce((mult, current) => mult * current, 1n));

 
  function countZeros(number) {
    let str = number.toString();
    let counter = 0;

    for (let i = str.length; i > 1; i--) {

      if (str.charAt(i) == false) {
        counter += 1;
      } else {
        return counter - 1;
      }
    }
    return counter - 1;
  }

  return countZeros(mult);
}
