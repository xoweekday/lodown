'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Designed to return any value passed in as an argument.
 * 
 * @param {value} value: The value to be returned
 * 
 * @return {value}: return the value of the passed in argument 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Designed to return a string describing the specific typeof data type
 * that is being passed in as an argument
 * 
 * @param {value} value: The value to be checked to see which type of data type
 * is being passed in.
 * 
 * @return {string}: a string indicating the typeof data type that is being passed
 * in as an argument.
 */
 function typeOf(value){
     if(typeof value === 'string'){
        return 'string';
    } else if(typeof value === 'number'){
        return 'number';
    } else if(typeof value === 'boolean'){
        return 'boolean';
    } else if(typeof value === 'undefined'){
        return 'undefined';
    } else if(value === null){
        return 'null';
    } else if(Array.isArray(value)){
        return 'array';
    } else if(typeof value === 'function'){
        return 'function';
    } else if(typeof value === 'object'){
        return 'object';
    }
 }
module.exports.typeOf = typeOf;


/**
 * first: Designed to return the first element or first specified number of elements
 * inside of an array.
 * 
 * @param {Array} array: This parameter is used to indicate the array in which to access.
 * If the passed in array isn't an array, an empty array will be returned. 
 * @param {Number} number: a number to indicate the specified amount of elements to be 
 * returned. If Number is not given or not a number, return the first element in the Array.
 * If Number is greater than the length of the array param then the entire array will be 
 * returned. If number is a negative number, then an empty array will be returned. 
 * 
 * @return {Array}: An array with the specified number of elements removed from the
 * passed in array param.
 */
 function first(array, number){
     let myArr = [];
     if(!Array.isArray(array) || number < 0){
        return myArr;
    } else if(typeOf(number) !== 'number'){
        return array[0];
    } else if(number > array.length){
        return array;
    } else {
        return array.slice(0, number);
    }
 }
 module.exports.first = first;
 
 
 /**
  * last: Designed to return the last element or last specified number of elements
  * inside of an array.
  * 
  * @param {Array} array: This parameter is used to indicate the array in which to access.
  *  If the passed in array isn't an array, an empty array will be returned. 
  * @param {Number} number: a number to indicate the specified amount of elements to be 
  * returned. If Number is not given or not a number, return the last element in the Array.
 * If Number is greater than the length of the array param then the entire array will be 
 * returned. If number is a negative number, then an empty array will be returned. 
  * 
  * @return {Array}: An array with the specified number of elements removed from the
  * passed in array param.
  */
  function last(array, number){
      let myArr = [];
if(!Array.isArray(array) || number < 0){
    return myArr;
} else if(typeOf(number) !== 'number'){
    return array[array.length - 1];
} else if(number > array.length){
    return array;
} else {
    return array.slice(-number);
}
    
 }
 module.exports.last = last;
 
 
 /**
  * indexOf: Designed to iterate over an Array, and return the index of the first 
  * occurrence of a specifed value. If no occurrence is found, -1 will be returned.
  * 
  * @param {Array} array: An array to be iterated over to access each element.
  * @param {value} value: a value to be searched for inside of the passed
  * in array argument.
  * 
  * @return {number}: A number indicating the index at which the value argument
  * was found inside of the array, if no matches were found -1 will be returned.
  */
  function indexOf(array, value){
      for(let i = 0; i < array.length; i++){
      if(array[i] === value){
          return i;
      }
  }
  return -1;
  }
  module.exports.indexOf = indexOf;
  
  
  /**
   * contains: Designed to iterate over an Array, and check if a specified value
   * is located inside that Array or not.
   * 
   * @param {Array} array: An array to be iterated over to access each element.
   * @param {value} value: a value to be searched for inside of the passed
   * in array argument.
   * 
   * @return {Boolean}: a boolean value stating true if value is found inside of the
   * array, false if otherwise.
   */
   function contains(array, value){
       return (array.includes(value)) ? true : false;
   }
   module.exports.contains = contains;
   
   
   /**
    * unique: Designed to iterate over an Array and remove any duplicate elements
    * from the passed in Array argument, into a new array.
    * 
    * @param {Array} array: An array to be iterated over to access each element.
    * 
    * @return {Array}: A duplicate free array.
    */
    function unique(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(indexOf(array, array[i]) === i){
            result.push(array[i]);
        }
    }
    return result;
    }
    module.exports.unique = unique;
    
    
     /**
      * filter: Designed to filter values in a collection based on a test. 
      * Takes a collection, Array or Object, and passes each element, index, and collection 
      * in the collection through a test Function. The test Function returns 
      * true if the value passes the test, false otherwise. Values that pass 
      * the test are collected and returned in an output Array.
      * 
      * @param {Array} array: The collection to filter.
      * @param {Function} test: The Function to be applied to each element, index,
      * and collection in the collection. The test Function must return a Boolean based on some 
      * logic which tests the value given to it.
      * 
      * @return {Array}: An Array containing the filtered collection values. 
      * The Array will contain only the values that passed the test.
      */
      function filter(array, test){
    let result = [];
   each(array, (element, index, array) =>{
       if(test(element, index, array)){
           result.push(element);
       }
   });
   return result;
}
module.exports.filter = filter;


/**
 * reject: Opposite of filter, reject is designed to iterate over a collection and
 * filter values in that collection based on a test. Takes a collection, Array or 
 * Object, and passes each element, index and collection in the collection through a test Function. The test
 * Function returns true if the value passes the test, false if otherwise. Values that
 * fail the test are pushed into a new array.
 * 
 * @param {Array} array: The collection to iterate over.
 * @param {Function} test: The function to be tested at each element, index, and collection at 
 * each iteration to determine if the value is truthy or falsy.
 * 
 * @return {Array}: An array containing only the values that failed the test function.
 */
 function reject(array, test){
     return  filter(array, (element, index, array) => {
         //set up conditional statement to test if at each iteration, if the passed in param evaluates to false on the element, index, and array
        if(!test(element, index, array)){
            //if conditional evaluates to false, push the element into result array
           return element;
        }
     });
 }
 module.exports.reject = reject;
 
 
 /**
  * partition: A combination of filter and reject, in the fact that partition iterates
  * over a collection and creates an array with two sub-arrays nested inside. These
  * nested arrays contain values that either pass an input test function, or does not
  * pass an input test function respectivly.
  * 
  * @param {Array} array: The collection to iterate over.
  * @param {Function} test: The function to be tested at each iteration to determine
  * if the value is truthy or fasly.
  * 
  * @return {Array}: An array containing two sub-arrays nested inside with values
  * that pass the test function in one array, and values that fail the test function
  * in the other function.
  */
  function partition(array, test){
      
      return [filter(array, test), reject(array, test)];
  }
  module.exports.partition = partition;
  
  
  /**
   * map: Designed to iterate over a collection and preform a test function on each
   * element inside of the collection. At the end of the iteration, a new array is made
   * with the values that the test function evaluates to.
   * 
   * @param {Array or Object} collection: The collection to iterate over.
   * @param {Function} action: The function to be ran at each iteration through the 
   * collection.
   * 
   * @return {Array}: A new array containing all of the transformed values that
   * resulted from the specified call back test function.
   */
   function map(collection, action){
         let result = [];
   each(collection, (e, i, a) =>{
       if(Array.isArray(collection)){
       result.push(action(e, i, a));
       } else {
           result.push(action(e, i, a));
       }
   });
   return result;
   }
   module.exports.map = map;
   
   
   /**
    * pluck: Designed to iterate over a collection, and return an array with a 
    * specified property value inside.
    * 
    * @param {Array or Object} collection: The collection to be iterated over.
    * @param {String} property: The name of the property that will be checked for
    * and placed into a new array at each iteration.
    * 
    * @return {Array}: A new array containing the collection[property] in the same
    * order in which they were in the collection.
    */
    function pluck(collection, property){
        return map(collection, (e, i, a) => e[property]);
    }
    module.exports.pluck = pluck;
    
    
    /**
     * every: Designed to iterate over a collection and call a test function to every
     * element to check if the values are truthy. As long as the values are truthy the
     * function will keep iterating over the entire collection as long as at each iteration 
     * that value is truthy. At any point of the iteration if any value is falsy the 
     * iteration will be stopped.
     * 
     * @param {Array or Object} collection: The collection to iterate over.
     * @param {Function} test: The function to be called at each iteration to check
     * if the value is truthy or fasly. If no test function is given, the every function
     * will still iterate over the collection to check to see if at each iteration that
     * element's value is truthy or falsy.
     * 
     * @return {Boolean}: If every value passes the test function at each iteration
     * a boolean value of true will be returned, if at least value does not pass
     * a boolean value of false will be returned. 
     */
     function every(collection, test){
         if(test === undefined){
        for(let i = 0; i < collection.length; i++){
            if(collection[i] === false){
                return false;
            }
        }
    } else if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(!test(collection[i], i, collection)){
                return false;
            } 
            
        }
    } else {
        for(let key in collection){
            if(!test(collection[key], key, collection)){
                return false;
            }
         
        }
    }
    return true;
     }
     module.exports.every = every;
     
     
    /**
     * some: Designed to iterate over a collection and call a test function to every
     * element to check if the values are truthy or falsy. 
     * 
     * @param {Array or Object} collection: The collection to iterate over.
     * @param {Function} test: The function to be called at each iteration to check
     * if the value is truthy or fasly. If no test function is given, some will
     * still iterate over the array to check if at each iteration that element's
     * value is truthy or fasly. 
     * 
     * @return {Boolean}: If every element fails the test function at each iteration
     * a boolean value of false will be returned, if at least one element passes
     * a boolean value of true will be returned. 
     */
     function some(collection, test){
         let answer = false;
    if(!test){
        each(collection, (e, i, a) =>{
            //at each iteration check if any elements are truthy values
        if(e === true){
            //if conditional passes re-assign answer to true
            answer = true;
     }
    });
    }
    

    if(test){
        each(collection, (e, i, a) =>{
        if(test(e, i, a)){
            answer = true;
        }
    });
    }
    return answer;
     }
     module.exports.some = some;
     
     
     /**
      * reduce: Designed to iterate over a collection and transform that collection
      * into a single value. Reduce does this by accumulating the results at each
      * iteration up until the end of the collection and return whatever that last
      * accumulated value is. At each iteration the callback function will be ran on
      * each element. 
      * 
      * @param {Array} array: A collection to iterate over.
      * @param {Function} action: A function to run on each iteration over the collection
      * to each element. 
      * @param {Value} seed: An initial value to start accumulating each value 
      * in the collection. If no seed is given, the first index of the collection will
      * take the place of the seed (inital starting value).
      * 
      * @return {Value} seed: returns the value of seed at the end of the iteration.
      */
      function reduce(array, action, seed){
          for(let i = 0; i < array.length; i++){
        if(seed === undefined){
            seed = array[0];
        } else {
            seed = action(seed, array[i], i);
        }
    }
    return seed;
      }
      module.exports.reduce = reduce; 
      
      
      /**
       * extend: Designed to take a target object, and a source object (or objects)
       * and copy every property from the source object(s) to the target object. 
       * 
       * @param {Object} target: The object to copy to
       * @param {Object(s)} source: The object(s) to copy from
       * 
       * @return {Object}: The target object will be retutned after all of the 
       * properties have been copied from the source object(s) to the target object.
       */
       function extend(target, ...source){
           each(source, (objs, i, a) => {
        each(source[i], (value, key, entireObj) =>{
            //at each iteration copy the properties onto obj1
        target[key] = source[i][key];
            });
    });
    //return obj1;
    return target;
       }
       module.exports.extend = extend;
     
      
    
    
 
 
