const accountId=144553
let accountEmail="mohitgoelmg007@gmail.com"
var accountPassword="112233"
accountCity="jaipur"//should not use this way.
let accountState;//its value will be undefined.


// accountId=3; but check when it is object or array.
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])