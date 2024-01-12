// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//NO PROMPT ATTEMPT \/
//                  \/
//                  \/
var allArrays = [         //mix all arrays to randomise
  lowerCasedCharacters,   //only if all options accepted
  upperCasedCharacters, 
  numericCharacters, 
  specialCharacters
];

var inputArray = [];

var generateBtn = document.querySelector('#generate');

//dropping all options into one function. The code can't work if user cancels or puts wrong starting input.
function optionsAll() {
  //determining password length
  var lengthInput = prompt("Enter a number between 8 and 128 for your password length.");
  //instead of converting the prompt directly into an integer, I made two different variables.
  //this is so if the user clicks 'cancel' on the prompt, it stops without following the conditional statements after.
  var lengthInputIndex = parseInt(lengthInput);
  //checking for all fault options.
  function checkNaN() {
    //differences between 'lengthInput' and 'lengthInputIndex' make it cleaner.
    //the order of the conditional statement first checks for the input to be a number BEFORE checking if that number is between 8 and 128.
    //'if (!lengthInput)' checks if user clicked cancel; ! notation means false 'lengthInput', i.e. cancel option.
    //1st 'else if' statement checks for non numeric error.
    //turned the string prompt into a number with 'parseInt'.
    //'isNaN' means 'it's not a number'. Condition checks the 'lengthInputIndex' to be a number.
    //alerts if there's an error.
    //'optionsAll()' returns to initial function.
    
    //2nd 'else if' condition checks the right index input.
    //condition is checked to meet requirements; then reversed (! notation),
    //alerts the user of unmet requirements.
    //'optionsAll()' restarts the process until user clicks cancel.
    if (!lengthInput) {
      return;
    } else if (isNaN(lengthInputIndex)) {
      alert("Use only numeric characters.")
      optionsAll();
    } else if (!(8 <= lengthInputIndex && lengthInputIndex <= 128)) {
      alert("The number must be between 8 and 128.");
      optionsAll();
    } else {
      console.log(lengthInputIndex);
      //you are calling this function here so it doesn't need calling at the end.
      //'restOptions' function is tied to function 'checkNan', otherwise you can't continue.
      function restOptions() {
        
        var lowerCaseAlert = confirm("Would you like to include lower case characters?");
        console.log(`Lower cased characters: ` + lowerCaseAlert);

          if (lowerCaseAlert) {
            inputArray.push(lowerCasedCharacters);
          };

        var upperCaseAlert = confirm("Would you like to include upper case characters?");
        console.log(`Upper cased characters: ` + upperCaseAlert);

          if (upperCaseAlert) {
            inputArray.push(upperCasedCharacters);
          };

        var numbersAlert = confirm("Would you like to include numbers?");
        console.log(`Numeric characters: ` + numbersAlert);

          if (numbersAlert) {
            inputArray.push(numericCharacters);
          };

        var specialCharAlert = confirm("Would you like to inlclude special characters?");
        console.log(`Special characters: ` + specialCharAlert);

          if (specialCharAlert) {
            inputArray.push(specialCharacters);
          };
      };
    //calling the nested fuction inside 'else' statements.
    restOptions();
    //console logging the options neatly for easy view.
    //logged twice to see the difference between.
    console.log(`Characters available: ` + inputArray);
    console.log(inputArray);
    }
  };
  //call on the 'checkNaN' function to apply it.
  checkNaN();
};

// function generatePassword("click", )

//only this function needs calling as 'restOptions' function is called inside of it, and is dependant on it.
optionsAll();


var password = [];

function generatePassword() {
  for (var i = 0; i < inputArray.length; i++) {
    var randomChar = Math.floor(Math.random() * 8);
    password.push(randomChar);
  }
  
};

console.log(password);

var generateBtn = document.querySelector(`#generate`);
var passwordPrint = document.querySelector(`#password`);

generateBtn.addEventListener(`click`, generatePassword);


// //PROMPT \/
// //       \/
// //       \/

// // Function to prompt user for password options
// function getPasswordOptions() {

// }

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);