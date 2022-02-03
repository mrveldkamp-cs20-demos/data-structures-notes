// DATA STRUCTURE NOTES

// A data structure is a structure for holding data.
// Some types of data structures include:
// 1. arrays
// 2. objects (associative arrays)
// 3. arrays of arrays
// 4. arrays of objects

// 1. ARRAYS
// An array is an ordered collection of data.
let myStringArray = ["a", "b", "c", "d", "e"];
let myNumberArray = [10, 20, 30, 40, 70];
let myMixedArray = [1, "e", true, [1, 2, 3]];

// Each element has a position / index
// We start counting at zero (0)
let myVowelArray = ["a", "e", "i", "o", "u"];
//         index ->  0    1    2    3    4

// To access an individual element, use the index operator []
console.log("First Element: " + myVowelArray[0]);
console.log("Second Element: " + myVowelArray[1]);
console.log("Third Element: " + myVowelArray[2]);
console.log("Fourth Element: " + myVowelArray[3]);
console.log("Fifth Element: " + myVowelArray[4]);

// You can determine the length of an array using the 'length' property.
console.log("Length: " + myVowelArray.length);

// Access a random element: generate a random index value
let randomIndex = Math.floor(Math.random() * myVowelArray.length);
console.log(myVowelArray[randomIndex]);

// List All Array Values
console.log("ALL ARRAY VALUES");
for (let i = 0; i < myVowelArray.length; i++) {
  console.log(myVowelArray[i]);
}