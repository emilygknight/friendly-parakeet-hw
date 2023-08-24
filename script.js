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
var password = ["8 chars", ""]
// var userInput = window.prompt("Enter You Password Below");

function generatePassword() {
  confirm("Please use one uppercase, at least 8 characters and one symbol!");
  var password = prompt("Enter you password below", "Enter password here");

  if (password >=8 && password <= 128) {
    alert = ("That password works");
  console.log("That password works!");
  } else {
  alert = ("Please try a different password")
  console.log("Try again")
  }
//

//

//

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
