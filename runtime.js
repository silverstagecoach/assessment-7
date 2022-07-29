const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     
doublerAppend(largeArray);
resultsAppend = perf.stop();  


perf.start();
doublerInsert(largeArray);
resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     
doublerAppend(mediumArray);
resultsAppend = perf.stop();  


perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     
doublerAppend(smallArray);
resultsAppend = perf.stop();  


perf.start();
doublerInsert(smallArray);
resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);

perf.start();                     
doublerAppend(tinyArray);
resultsAppend = perf.stop();  


perf.start();
doublerInsert(tinyArray);
resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);


// We have two functions, and I'll refer to them by their difference in name: Append and Insert.
// Results for the extraLargeArray
// append 3.3959 ms
// insert 999.6403 ms -333x slower-
// Results for the largeArray
// append 559.5 μs
// insert 10.2088 ms -20x slower-
// Results for the mediumArray
// append 318.3 μs
// insert 353.6 μs -1.1x slower-
// Results for the smallArray
// append 9.3 μs
// insert 18.2 μs -2x slower-
// Results for the tinyArray
// append 4.2 μs
// insert 20.7 μs -5x slower-

// Clearly, Append is faster, anywhere from 333x faster to 1.1 times faster, depending on the size of the array passed in.
// What we can see is that appending information at the end of an array is MUCH faster than putting it at the beginning.
// Not only does append run faster, but it scales better, too.
// What I found interesting is that at the lower end, Append is so much faster, but going to the mediumArray, they have almost similar runtimes, and then our results show that inserting slows way down when we get to an extra large array.