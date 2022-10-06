function firstLetterOfName(name) {
    alert(`The name ${name} starts with the letter ${name[0]}`)
  }
  
  
  function divisibleByTwo(number) {
    if (number % 2 == 0)
    return true
    else {
      return false
    }
  }
  
  
  function largestNum(arr) {
    var largest = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]
      }
    }
    console.log(largest)
  }
  
  
  firstLetterOfName("Alberte")
  
  console.log(`The number 8 is divisable by two: ${divisibleByTwo(8)}`)
  console.log(`The number 9 is divisable by two: ${divisibleByTwo(9)}`)
  
  largestNum([0, 100, 3500, 15000, 9000, 22000, 7700])