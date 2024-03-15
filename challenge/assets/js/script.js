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

// //NO PROMPT ATTEMPT \/
// //                  \/
// //                  \/
// allArrays never gets used in the end //
var allArrays = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters];

var inputArray = [];

// had to 'outscope' the password as my previous attempts I tried to separate the generatePassword function from the parent optionsAll //
// this created scoping issues where the password variable call did not use the redifined option (since it was nested inside optionsAll func) //
var password = "";

function optionsAll() {
    var lengthInput = prompt("Enter a number between 8 and 128 for your password length.");
    var lengthInputIndex = parseInt(lengthInput);
    
    // check user input is appropriate //
    if (!lengthInput) {
        return;
    } else if (isNaN(lengthInputIndex)) {
        alert("Use only numeric characters.")
        optionsAll();
    } else if (!(8 <= lengthInputIndex && lengthInputIndex <= 128)) {
        alert("The number must be between 8 and 128.");
        optionsAll();
    } else {

        // user choice of password characters //
        var lowerCaseAlert = confirm("Would you like to include lower case characters?");
        if (lowerCaseAlert) {
            inputArray.push(lowerCasedCharacters);
        };

        var upperCaseAlert = confirm("Would you like to include upper case characters?");
        if (upperCaseAlert) {
            inputArray.push(upperCasedCharacters);
        };

        var numbersAlert = confirm("Would you like to include numbers?");
        if (numbersAlert) {
            inputArray.push(numericCharacters);
        };

        var specialCharAlert = confirm("Would you like to include special characters?");
        if (specialCharAlert) {
            inputArray.push(specialCharacters);
        };

        // generate password right after options end //
        function generatePassword(lengthInputIndex, inputArray, password) {
          var loopNr = lengthInputIndex;
                  
          for (var i = 0; i < loopNr; i++) {
            var randomArrayIndex = Math.floor(Math.random() * inputArray.length);
            var randomArray = inputArray[randomArrayIndex];
            var randomCharIndex = Math.floor(Math.random() * randomArray.length);
            password += randomArray[randomCharIndex];
            }

          console.log(password);
          var passwordPrint = document.querySelector('#password');
          passwordPrint.textContent = password;
        }
        // call the function inside optionsAll, so it generates after button click //
        generatePassword(lengthInputIndex, inputArray, password);
      }
};

var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', function () {
  // due to scoping issues, the function optionsAll gets called on button click instead of on website load //
  optionsAll();
});


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