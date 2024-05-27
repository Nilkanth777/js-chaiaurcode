const accountId = 1212;

let accountEmail = "ajaj@gmail.com"; /* since let is a block scoped variable it cannot be modified 
while declaring variable let for eg let accountEmail will not work but only accountEmail will work as it 
overwrite variable */

var accountName = "Nik";

accountCity = "Mumbai"

let accountState; // this variable is declared but when we will print this variable output will be undefined

// accountId = 2222 Not allowed as variable is a constant so redeclaration is not allowed 

console.log(accountId);

accountEmail = "kckc@gmail.com";
var accountName = "Nilkanth";
accountCity = "bengaluru"

console.table([accountEmail , accountName , accountCity , accountState ])
