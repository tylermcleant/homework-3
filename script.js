// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var uselength = confirm ("Do you want to use length Criteria?");
  var charctrcrit= confirm (" Do you want any character criteria in your password?");
  if (charctrcrit==true){
  var lower= confirm ("Do you require using lowercase characters?")
  var upper= confirm("Do you require using uppercase characters?")
  var numeric= confirm("Do you require numbers in your password?")
  var special= confirm("Do you want special characters in your password?") 
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
