// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var upperarr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var numberarr = ["1","2","3","4","5","6","7","8","9","0",]
var specialchararr = ["!","#","@","$","%","^","&","*","(",")",",","-","_","=","+","[","]","{","}","|",";",":","<",">","/","?","`","~",]
//
function generatePassword(){
  console.log("button pressed")
  var charcters = []
  var length = prompt("How Many Charcters Would You Like Your Password To Contain")
  var lowercase = confirm("Press 'ok' if you would like lower case letters")
  var uppercase = confirm("Press 'ok' if you would like Upper case letters")
  var number = confirm("Press 'ok' if you would like Numbers")
  var specialchar = confirm("Press 'ok' if you would like Special Characters")

  if (length >= 8 && length <= 128){
    if (lowercase ===true){
      charcters = charcters.concat(lowerarr)
    }
    if(uppercase === true){
      charcters = charcters.concat(upperarr)
    }
    if(number === true){
      charcters = charcters.concat(numberarr) 
    }
    if(specialchar === true){
      charcters = charcters.concat(specialchararr)
    }

  }else{
    confirm("please select a password length between 8 and 128")
  }
  console.log(charcters)
  var shuffled = charcters.sort(function(){ return 0.5 - Math.random() });
  var password = shuffled.slice(0,length);

  var passwordstring = password.join("")

  console.log(passwordstring);

  

  return(passwordstring);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
