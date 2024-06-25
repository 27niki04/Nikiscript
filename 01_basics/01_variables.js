const accountId=1234
let EmailId="raninikita@google.com"
var accountPassword="753"
accountCity="Jaipur"
let accountState;

//accountId=2//not allowed

EmailId="abcd@"
accountPassword="894"
accountCity="Delhi"

console.log(accountId);

console.table([accountId,EmailId,accountPassword,accountCity,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/