// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var uselength = confirm ("Do you want to use length Criteria?");
  if (uselength==true){ 
    var length = prompt("How long would you like your password?");
  }
  else {
    var length = 8;
  }
  var charctrcrit= confirm (" Do you want any character criteria in your password?");
  var characters=''
  if (charctrcrit==true){
    var lower= confirm ("Do you require using lowercase characters?")
  if (lower==true){
    characters+='abcdefghijklmnopqrstuvwxyz'
  }
    var upper= confirm("Do you require using uppercase characters?")
  if (upper==true){
    characters+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
    var numeric= confirm("Do you require numbers in your password?")
  if (numeric==true){
    characters+='0123456789'
  }
    var special= confirm("Do you want special characters in your password?") 
  if (special==true){
    characters+='~@#$%^&*?-!'
  }
  }
    var result           = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

  
  var password = result;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
