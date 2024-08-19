// Initialize an Array of Grades:
const studentGrades = [85, 92, 78, 88, 90, 67, 95]

// Add and Remove Grades:
studentGrades.push(23) //push adds 23 as the last element of the array
studentGrades.pop() //pop removes 95 from the array
studentGrades.unshift(40) //unshift adds 40 as the first element of the array
let firstGrade = studentGrades.shift() //removes 85 from the array and stores it in firstGrade

// Modify the Array:
let spliceTest = studentGrades.splice(1, 2, 'great', 'grace') // splice, starting from index 1, removes 2 elements in the array (92 and 78) and replaces with 'good' and 'grace'
let modGrades = studentGrades.slice(1,6) //slice, starting from index 1, creates a new array up to index 5, meaning it does not add the last index even though it was included in the code

// Combine and Split Arrays:
let addedGrades = studentGrades.concat(modGrades) //concat combines or adds modGrades array to the studentGrades array to for a new array called addedGrades.
let stringGrades = studentGrades.join(', ') //the join method converts the studentGrades array into strings separated by a comma and space

// Reverse and Sort Grades:
let reverseGrades = studentGrades.reverse() //reverse method switches or reverses the order of the array by creating aa new array that starts from the last element to the first
let sortGrades = studentGrades.sort((b, a) => b - a) //the sort function sorts the grades in the array into a new array, following an ascending order, from small to big

// Iterate and Transform Grades:
let individualGrade = studentGrades.forEach(grade => console.log(grade)) //the forEach method iterates each of the element in the array and execute the callback function for all the elements.
let patchedGrade = studentGrades.map(grade => grade + 5) //map creates a new array which from the studentGrades array and executes the callback function, adding 5 to every element to form the new one.

// Filter and Analyze Grades:
let passingGrade = studentGrades.filter(grade => grade > 70) //filter method looks through the array and check for grades that are greater than 70 and list them out.
let total = studentGrades.reduce((sum, grade) => grade + sum, 0) // the reduce method executes the reducer function, sums up all the grades and generate an output.
let grade95 = studentGrades.find(grade => grade === 95) //findIndex looks through the array and execute the callback function, looks for the first grade that is exactly 95.
let fIndex = studentGrades.findIndex(grade => grade < 80) //findIndex looks through the array to find the index of the first element that is less than 80, which 2 (78).
let below60 = studentGrades.some(grade => grade < 60) //the some method checks through the array to find which grade fulfills the callback function of being less than 60.
let above75 = studentGrades.every(grade => grade > 75) //some method checks the array to find out if ALL of the grades pass the callback function condition of being greater than 75

// Check for Existence:
let has100 = studentGrades.includes(100) //includes check to find out if the array contains 100 has part of its elements.
console.log(has100)


