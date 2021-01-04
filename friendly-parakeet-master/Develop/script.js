// Assignment code here

function getDigits(){
  var characterNumber = window.prompt("How many digits would you like your password to be?");
    var passDigits = parseInt(characterNumber);
    console.log(passDigits);
    return passDigits;
}

var getCase = function(){
  var caseChoice1 = window.prompt("Would you like your password to include upper case or lower case? Enter 'UPPER' 'LOWER' or 'BOTH'");
  var caseChoice = caseChoice1.toLowerCase();
  return caseChoice;
};

var specialChars = function(){
  var specialConfirm = window.confirm("Do you want your password to contain special characters?");
  return specialConfirm;
}

var getNumeric = function(){
  var numericConfirm = window.confirm("Do you want your password to contain numbers?");
  return numericConfirm;
}

function generatePassword() {

  var specialChoice = specialChars();
    if (specialChoice === true){
      lettersetLength = 76;
      letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>,./?";
    }else{
      lettersetLength = 62;
      letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
  
var numericChoice = getNumeric();
  if (numericChoice === true){
    if(specialChoice === true){
    lettersetLength = 76;
    letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>,./?";
    }else{
    letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
  }else{
    if(specialChoice === true){
    lettersetLength = 66;
    letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*<>,./?";
    }else{
      letterset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  }

  var length = getDigits(),

  newPass = "";
  
  for (var i = 0, n = lettersetLength; i < length; ++i) {
  newPass += letterset.charAt(Math.floor(Math.random() * n));
  }
    var stringPass = newPass.toString();
    var caseSelection = getCase();

    if (caseSelection==="lower"){
    var lowerPass = stringPass.toLowerCase();
    return lowerPass;
    }else if(caseSelection==="upper"){
    var upperPass = stringPass.toUpperCase();
    return upperPass;
    }else if(caseSelection==="both"){
    return stringPass;
    }
  
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