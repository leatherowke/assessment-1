const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question('welcome to the password validator tool!  Enter Password: ', function(input){

if(input.length > 10){
  console.log('success!')
}
else{console.log('Too short!')
}

	// This line closes the connection to the command line interface.
	reader.close()

});