var numbers = [12, 10, 15, 11, 14, 13, 16];

function bubbleSort(array) {
    var done = true;
    while (done) {
      done = false;
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] > array[i + 1]) {
          done = true;
          var tmp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = tmp;
        }
      }
    }
  
    return array;
  }
  
  
  bubbleSort(numbers);
  console.log(numbers);


// like function reverse
function reverse(value) {
    const newArr = []
    for(let i = value.length - 1; i >= 0; i--) {
        newArr.push(value[i])
    }
    return newArr
}

reverse(numbers)
console.log(reverse(numbers))