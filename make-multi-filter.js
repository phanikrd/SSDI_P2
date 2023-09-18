function MakeMultiFilter(originalArray) {
    // Initialize currentArray to be identical to originalArray
    let currentArray = [originalArray];
  
    // Define the arrayFilterer function
    function arrayFilterer(filterCriteria, callback) {
      // If filterCriteria is not a function, return currentArray
      if (typeof filterCriteria !== 'function') {
        return currentArray;
      }
  
      // Update currentArray based on the filterCriteria function
      currentArray = currentArray.filter(filterCriteria);
  
      // If callback is a function, call it with currentArray as an argument
      if (typeof callback === 'function') {
        callback.call(originalArray, currentArray);
      }
  
      // Return arrayFilterer to allow chaining
      return arrayFilterer;
    }
  
    // Return the arrayFilterer function
    return arrayFilterer;
  }
  
  
  var arrayFilterer1 = MakeMultiFilter([1, 2, 3]);
  
  arrayFilterer1(function (elem) {
    return elem !== 2;
  }, function (currentArray) {
    console.log(this); // [1, 2, 3]
    console.log(currentArray); // [1, 3]
  });
  
  arrayFilterer1(function (elem) {
    return elem !== 3;
  });
  
  var currentArray = arrayFilterer1();
  console.log('currentArray', currentArray); // [1]
  
  function filterTwos(elem) {
    return elem !== 2;
  }
  
  function filterThrees(elem) {
    return elem !== 3;
  }
  
  var arrayFilterer2 = MakeMultiFilter([1, 2, 3]);
  var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
  console.log('currentArray2', currentArray2); // [1]
  
  var arrayFilterer3 = MakeMultiFilter([1, 2, 3]);
  var arrayFilterer4 = MakeMultiFilter([4, 5, 6]);
  console.log(arrayFilterer3(filterTwos)()); // [1, 3]
  console.log(arrayFilterer4(filterThrees)()); // [4, 5, 6]
  
