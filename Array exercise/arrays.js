// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.

const names = ['David', 'Ann', 'Leia', 'Matthew', 'Mark'];
document.getElementById('task1').textContent = names

// Task 2
// Print the second item of the array from the task 1.

const secondname = names[1]
document.getElementById('task2').textContent = secondname


// Task 3
// Print the length of the array.

const length = names.length
document.getElementById('task3').textContent = length


// Task 4
// Print the last item of the array

const last = names[names.length - 1];
document.getElementById('task4').textContent = last


// Task 5
// Add Peter as the last item to the array and print the whole array

names.push("Peter");
document.getElementById('task5').textContent = names


// Task 6
// Print the array with spaces, not commas
let joint = names.join(' ');
document.getElementById('task6').textContent = joint;

// Task 7
// Replace Mathew in the array with Lisa and Abraham 

/*Array.splice(start, removeCount, newItem, newItem, newItem, ...)*/

names.splice(3,1, "Lisa", "Abraham")

document.getElementById('task7').textContent = names;


// Task 8
// Sort the array in the alphabetical order and print it

names.sort();
document.getElementById('task8').textContent = names;


// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.

const numbers = [1, 7 , 45, 32, 27, 86]
numbers.sort(function(a, b){return b-a});
document.getElementById('task9').textContent = numbers;


// Task 10
// Randomize the numbers array.

numbers.sort(function(){return 0.5 - Math.random()});
document.getElementById('task10').textContent = numbers;


// Task 11
// Find the largest and smallest value from the numbers array using sort() function.



numbers.sort(function(a, b){return b - a});
const highnumber = numbers[0]
const lownumber = numbers[numbers.length-1]
document.getElementById('task11').textContent = highnumber
document.getElementById('task12').textContent = lownumber



// Print those values.