function isPalindrome(string) {
    let cleanString = string.toLowerCase().replace(/\s/g, '');
    let reversedString = cleanString
      .split("")
      .reverse()
      .join("");
    return cleanString === reversedString;
  }
  
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("race Car"));

