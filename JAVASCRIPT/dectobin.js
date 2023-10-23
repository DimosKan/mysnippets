function decimalToBinary(decimal) {
    if (decimal === 0) {
      return '';
    }
  
    const binaryString = decimalToBinary(Math.floor(decimal / 2));
    return binaryString + (decimal % 2).toString();
  }

  console.log(decimalToBinary(3))
  console.log(decimalToBinary(8));
  console.log(decimalToBinary(1000));