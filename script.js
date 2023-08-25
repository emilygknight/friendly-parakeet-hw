// Assignment code here
/* ACCEPTANCE CRITERIA 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
/*
  PSEUDO-CODE:
  1. Promt user to click generate password for password criteria
  2. User can select which criteria to include in the password
  3. The password needs requirement length of 8-128 characters
  4. The password will need a requirement of what type of characters to use
  5. Input validated whenever you put in all the correct requirement for a password 
  6. The password will generate whenever you match all criteria
  7. The password should appear in an alert or written to the page
*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var possibleChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allpossibleChoices = []

// var userInput = window.prompt("Enter You Password Below");
function generatePassword() {
  var password = [];
  var passwordLength = parseInt(prompt("How long would you like your password to be?", "Must be between 8-128 Characters"));
  console.log(passwordLength + " Characters long");
  console.log(isNaN(passwordLength))
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be between 8 and 128 characters");
    return "Try Again";
  }
  if (isNaN(passwordLength)) {
    alert("Please write a number");
    return "Please Try again";
  }

  var uppercaseConfirm = confirm("Do you want uppercase letters?");
  console.log(uppercaseConfirm);
  var lowercaseConfirm = confirm("Do you want lower case letters?");
  console.log(lowercaseConfirm);
  var specialChars = confirm("Would you like to use any special characters?");
  console.log(specialChars);
  var numbersConfirm = confirm("Would you like numbers?");
  console.log(numbersConfirm);

  if(uppercaseConfirm === false && lowercaseConfirm === false && specialChars === false && numbersConfirm === false){
    alert("Please pick one criteria");
    return "please try again";
  }

  // if (passwordLength >= 8 && passwordLength <= 128) {
    if (uppercaseConfirm) {
      allpossibleChoices = allpossibleChoices.concat(upperCase);
      password.push(upperCase[Math.floor(Math.random()*upperCase.length)])
    }
    if (lowercaseConfirm) {
      allpossibleChoices = allpossibleChoices.concat(lowerCase);
      password.push(lowerCase[Math.floor(Math.random()*lowerCase.length)])
    }
    if (specialChars) {
      allpossibleChoices = allpossibleChoices.concat(possibleChars);
      password.push(possibleChars[Math.floor(Math.random()*possibleChars.length)])
    }
    if (numbersConfirm) {
      allpossibleChoices = allpossibleChoices.concat(numbers);
      password.push(numbers[Math.floor(Math.random()*numbers.length)])
    }

  //   alert("We created a password!")
  // } else if (passwordLength < 8) {
  //   alert("The length is too short.");
  // } else if (passwordLength > 128) {
  //   alert("The length is too long.");
  // } else {
  //   alert("Not Valid.")
  // }
  console.log(password);
  console.log(allpossibleChoices);
  for (var i = password.length; i < passwordLength; i++) {
    password.push(allpossibleChoices[Math.floor(Math.random() * allpossibleChoices.length)]);
    console.log(password);
  }

  return password.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
