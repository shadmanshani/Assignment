//1. Solve the problem with Javascript  to find the maximum between two numbers.

let number_One = 10;
let number_Two = 20;

if (number_One > number_Two) {
	console.log("Number One is Maximum");
}
else
	console.log("Number Two is Maximum");


//2. Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

let number = -5;

if (number == 0) {
	console.log("Zero");
}

else if (number > 0) {
	console.log("Positive number");
}
else
	console.log("Negative number");

//3. Solve the problem with Javascript  to check whether a number is divisible by 10 or not.

let input = 58;

if (input % 10 == 0) {
	console.log("Number divisible by 10");
}
else if (input % 10 != 0) {
	console.log("Number is not divisible by 10");
}
else
	console.log("Please enter a number");

// 4. Solve the problem with Javascript  to check whether a number is even or odd.

let value = 58;

if (value % 2 == 0) {
	console.log("Even");
}
else if (value % 2 != 0) {
	console.log("Odd");
}
else
	console.log("Please enter a number");

// 5. Solve the problem with Javascript  to check whether a character is in the alphabet or not.

let character = 'l';

if (character == 'a' || character == 'A') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'b' || character == 'B') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'c' || character == 'C') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'd' || character == 'D') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'e' || character == 'E') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'f' || character == 'F') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'g' || character == 'G') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'h' || character == 'H') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'i' || character == 'I') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'j' || character == 'J') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'k' || character == 'K') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'l' || character == 'L') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'm' || character == 'M') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'n' || character == 'N') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'o' || character == 'O') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'p' || character == 'P') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'q' || character == 'Q') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'r' || character == 'R') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 's' || character == 'S') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 't' || character == 'T') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'u' || character == 'U') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'v' || character == 'V') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'w' || character == 'W') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'x' || character == 'X') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'y' || character == 'Y') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else if (character == 'z' || character == 'Z') {
	console.log("Character is in the alphabet & the alphabet is : ", character);
}
else
	console.log("Invalid character");

// 6. Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temperature = 27;

if (temperature >= 30) {
	console.log("Temperature is Hot & it is : ", temperature + " degrees");
}
else if (temperature <= 25) {
	console.log("Temperature is Cold & it is : ", temperature + " degrees");
}
else
	console.log("Temperature is Normal & it is : ", temperature + " degrees");

// 7. Solve the problem with Javascript  to find a maximum between three numbers.

let numOne = 50;
let numTwo = 20;
let numThree = 60;

if (numOne > numTwo && numOne > numThree) {
	console.log("Number One is Maximum & it is : ", numOne);
}
else if (numTwo > numOne && numTwo > numThree) {
	console.log("Number Two is Maximum & it is : ", numTwo);
}
else
	console.log("Number Three is Maximum & it is : ", numThree);

// 8. Write a javaScript expression using ternary operator that checks if a number x is even or odd.Store the result in a variable and print "Even Number" or "Odd Number".

let theNumber = 12311;

theNumber % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");

// 9. Use the logical ADD operator to determine if two variabless, numOne and numTwo , are both grater than 30 . Print a message to the reflecting the result.

let numberOne = 60, numberTwo = 31;
if (numberOne > 30 && numberTwo > 30) {
	console.log("Both numbers are grater than 30");
}
else
	console.log("Both numbers are less than 30");

// 10. write a javaScript program that uses if-else statements combined with logical operators. The program should check if a person's age is between 13 & 19. If so , print "Teenager" otherwise, print "Not a teenager" .

let age = 12;

if (age >= 13 && age <= 19) {
	console.log("Teenager");
}
else
	console.log("Not a teenager");
