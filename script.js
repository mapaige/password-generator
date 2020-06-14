
// Assignment Code
var alphabet='abcdefghijklmnopqrstuvwxyz'
var lowerCaseArray=alphabet.split("")
var upperCaseArray=alphabet.toUpperCase().split("")
var specialChar='!@#$%^&*'
var specialCharArray=specialChar.split("")
var numbers='0123456789'
var numbersArray=numbers.split("")

var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', function (event) {
	var passwordlength = prompt('Password length is 8 to 128 characters. Please input your length below.')
	console.log(passwordlength);
	if (passwordlength >= 8 && passwordlength <= 128) {
		var lowerCase = confirm('Do you want to include a lowercase character?');
		var upperCase = confirm('Do you want to include a uppercase character?');
		var numeric = confirm('Do you want to include a numeric character?');
    var symbol = confirm('Do you want to include a symbol character?');
    }

  else (passwordlength <=8 && passwordlength <=128);{
   alert ("Please keep range of characters between 8 to 128. Try Again.")
  }
  
 //Write password to the #password input
  //function writePassword() {
   //var password = generatepassword();
   //var passwordText = document.querySelector('#generate');

  //passwordText.value = password;
 
  

 //Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
  });
