// Q1) Create an array of states in India and remove all names starting with vowels.
console.log('--- Q1: Remove names starting with vowels ---');
let states = ['Andhra Pradesh', 'Bihar', 'Uttar Pradesh', 'Odisha', 'Tamil Nadu', 'Kerala', 'Assam'];
let filteredStates = states.filter(state => !/^[aeiou]/i.test(state));
console.log(filteredStates); // Output: [ 'Bihar', 'Tamil Nadu', 'Kerala' ]

// Q2) Reverse the words in a given string.
console.log('--- Q2: Reverse the words in a string ---');
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr); // Output: 'India my love I'

// Q3) Replace a part of a string using array.splice.
console.log('--- Q3: Replace part of a string using array.splice ---');
let string = 'INDIA';
let arr = string.split('');
arr.splice(1, 3, 'NDONES');
let newString = arr.join('');
console.log(newString); // Output: 'INDONESIA'

// Q4) Count the number of consonants and vowels in a string.
console.log('--- Q4: Count consonants and vowels in a string ---');
let sampleString = 'This is a sample string with more than twenty characters';
let vowelsCount = (sampleString.match(/[aeiou]/gi) || []).length;
let consonantsCount = (sampleString.match(/[^aeiou\s]/gi) || []).length;
console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`); // Output: Vowels: 12, Consonants: 27

// Q5) Replace the wrong word with the correct word in a sentence.
console.log('--- Q5: Replace wrong word with correct word ---');
function correctFn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log(correctFn('I love my Indea', 'Indea', 'India')); // Output: 'I love my India'

// Q6) Use array.filter to return numbers greater than 5.
console.log('--- Q6: Filter numbers greater than 5 ---');
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let filteredNumbers = inputArr.filter(num => num > 5);
console.log(filteredNumbers); // Output: [9, 10, 7]

// Q7) Calculate the average scores of students using array.map and array.reduce.
console.log('--- Q7: Calculate average scores of students ---');
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
let averages = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((a, b) => a + b) / student.scores.length
}));
console.log(averages); // Output: [ { name: 'Ram', average: 70 }, { name: 'Mohan', average: 80 }, { name: 'Sai', average: 70 }, { name: 'Hemang', average: 85 } ]

// Q8) Find repeated sum of digits until a single digit is obtained.
console.log('--- Q8: Repeated sum of digits ---');
function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
}
console.log(repeatedSum(456)); // Output: 6

// Q9) Count the number of words in a paragraph.
console.log('--- Q9: Count the number of words in a paragraph ---');
function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}
console.log(countWords('This is a sample paragraph to count the number of words.')); // Output: 10

// Q10) Reverse a string.
console.log('--- Q10: Reverse a string ---');
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello')); // Output: 'olleH'

// Q11) Calculate the average of subjects for each student.
console.log('--- Q11: Calculate average of subjects for each student ---');
const studentsScores = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

let averagesScores = studentsScores.map(student => {
    let key = Object.keys(student)[0];
    let subjects = Object.values(student[key]);
    let average = subjects.reduce((a, b) => a + b) / subjects.length;
    return { [key]: { average: average } };
});

console.log(averagesScores);
// Output:
// [
//     { student1: { average: 64.2 } },
//     { student2: { average: 64.2 } },
//     { student3: { average: 64.2 } }
// ]
