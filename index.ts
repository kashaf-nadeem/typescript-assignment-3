//  Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var n: number = 10
var sum: number = 0
let i

for (i = 1; i <= n; i++) {
    if (i%2 == 0) {
        sum += i
    }
}

console.log(`The sum of even numbers from 1 to ${n} is ${sum}`)

// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Original: "+numbers);
for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}

console.log("Odd numbers: "+numbers);

// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}

console.log("Area of circle with radius 5: "+calculateArea(5));

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

var grades: number[] = [100, 50, 75, 80, 90, 45, 30, 20, 10, 0];

console.log("Original: "+grades);
for (let i: number = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
    }
}

console.log("Passing grades: "+grades);


// Write a program that uses a function to find the largest element in an array of numbers

function findLargest(numbers: number[]): number {
    let largest: number = numbers[0];
    for (let i: number = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Original: "+numbers);
console.log("Largest: "+findLargest(numbers));

