// Assignment Code
var generateBtn = document.querySelector("#generate");

//
function generatePassword(){
  console.log("button pressed")
  var charcters = []
  var length = prompt("How Many Charcters Would You Like Your Password To Contain")
  var lowercase = confirm("Press 'ok' if you would like lower case letters")
  var uppercase = confirm("Press 'ok' if you would like Upper case letters")
  var number = confirm("Press 'ok' if you would like Numbers")
  var speialchar = confirm("Press 'ok' if you would like Special Characters")

  if (between(length, 8, 128)){
    if (lowercase != null){
      charcters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
    }
    if(uppercase != null){
      charcters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
    }

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
