//  Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var n = 10;
var sum = 0;
var i;
for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log("The sum of even numbers from 1 to ".concat(n, " is ").concat(sum));
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i_1 = 0; i_1 < numbers.length; i_1++) {
    if (numbers[i_1] % 2 === 0) {
        console.log(numbers[i_1]);
    }
}
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original: " + numbers);
for (var i_2 = 0; i_2 < numbers.length; i_2++) {
    if (numbers[i_2] % 2 === 0) {
        numbers.splice(i_2, 1);
    }
}
console.log("Odd numbers: " + numbers);
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log("Area of circle with radius 5: " + calculateArea(5));
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var grades = [100, 50, 75, 80, 90, 45, 30, 20, 10, 0];
console.log("Original: " + grades);
for (var i_3 = 0; i_3 < grades.length; i_3++) {
    if (grades[i_3] < 50) {
        grades.splice(i_3, 1);
    }
}
console.log("Passing grades: " + grades);
// Write a program that uses a function to find the largest element in an array of numbers
function findLargest(numbers) {
    var largest = numbers[0];
    for (var i_4 = 1; i_4 < numbers.length; i_4++) {
        if (numbers[i_4] > largest) {
            largest = numbers[i_4];
        }
    }
    return largest;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original: " + numbers);
console.log("Largest: " + findLargest(numbers));
