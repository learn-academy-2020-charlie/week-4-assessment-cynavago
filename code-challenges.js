// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

//create a function that takes in an array
const removeShuffle = (array) => {
    //shows the recursive function
    console.log(array);
    let newArr = []
    //if the array length is 0, return string
    if (array.length == 0){
        return "The array is empty"
    //else
    } else
    {
        //return the array and remove the first word
        array.shift()
        //create a new variable to hold array length
        let currentIndex = array.length;
        //create new temporary variable
        let temp;
        //create new variable to hold randomIndex
        let randomIndex;
        //while the array is not an empty array
        while (currentIndex !== 0){
            //obtain a random number of the array length and define it as a random index of the array 
            randomIndex = Math.floor(Math.random() * currentIndex);
            //decrease the current index by 1 so that while loop goes through each index
            currentIndex -= 1;
            //the temp variable will equal the word at the current index
            temp = array[currentIndex];
            //the current index will equal the random index number
            array[currentIndex] = array[randomIndex];
            //this random index will be reassigned/swapped with the temp variable
            array[randomIndex] = temp;
        }
        //return the recursive function
        return (removeShuffle(array))
    }
}

console.log(removeShuffle(collections));


//Comment: I tried to use a recursive function but I was only able to return the last step of the function, aka when the array is empty. I console logged all the returns so that they're visible when you run the function. Not sure if this is the way to do it. How do you return all results of the recursive function?


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


//create a function that takes in an array
const cubeSum = (array) => {
    //return the array using map to multiply the values by themselves * 3 using Math.pow, then use reduce to add the values in the array together
    return array.map(value => (Math.pow(value, 3))).reduce((a,b) => a+b)
}


// console.log(cubeSum(cubeAndSum1));
// console.log(cubeSum(cubeAndSum2));


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//create a function that takes in an array
const minMax = (array) => {
    // Return the minimum and maximum numbers from the array. Use Array.from to convert the 2 numbers into an array that we can return.
    return Array.from([(Math.min(...array)), (Math.max(...array))])
}

// console.log(minMax(nums1));
// console.log(minMax(nums2));

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// var testString1 = "albatross"
var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//create a function that takes in a string
const funkyCaps = (string) => {
    //convert the string to an array using spread operator, example: ["a", "l", "b", "a", "t", "r", "o", "s", "s"]
    let arr = [...string]
    //create a new array, map over arr. 
    let newArr = arr.map((value, index) => {
        // if index is even, change to lowercase.
        if (index%2 === 0){
            return string[index].toLowerCase()
        // else change to uppercase.
        } else{
            return string[index].toUpperCase()
        }
    })
    //return newArr, join back into a string and remove all the commas
    return newArr.join().replace(/,/g, '')
}

// console.log(funkyCaps(testString1));
// console.log(funkyCaps(testString2));

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//create a function that takes in 2 arrays
const noRepeat = (array1, array2) => {
    //combine both arrays using the spread operator
    let combinedArr = [...array1, ...array2]
    //filter the repeated numbers in the combined array
    return combinedArr.filter((a, b) => combinedArr.indexOf(a) === b)
}

// console.log(noRepeat(arr1, arr2))