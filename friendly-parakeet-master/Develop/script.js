// Assignment code here

function getDigits(){
  var characterNumber = window.prompt("How many digits would you like your password to be?");
    var passDigits = parseInt(characterNumber);
    console.log(passDigits);
    return passDigits;
}


function generatePassword() {
  
  

  var length = getDigits(),
  letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>,./?",
  newPass = "";
  for (var i = 0, n = letterset.length; i < length; ++i) {
  newPass += letterset.charAt(Math.floor(Math.random() * n));
  }
  return newPass;





  
  
  
  // var casingPrompt = window.prompt("Would you like your password to include upper case or lower case? Enter 'UPPER' or 'LOWER'");

  //   switch (casingPrompt) {
  //     case 'UPPER':
  //     case 'upper':
  //       upperCase();
  //       break;
      
    
  //     case 'LOWER':
  //     case 'lower':
  //       return "goodpassword";
        

  //     default:
  //       window.alert('Invalid option, try again.')
  //       break;
  //   }
  
  // var numericPrompt = window.confirm ("Would you like your password to contain numbers?");
  //   if (numericPrompt = true) {
  //     return "1337";
  //   }
  //   else {
  //     return ">:(";
  //   }
  // //return "123";

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function upperCase () {
  casingPrompt =  'upper'
}