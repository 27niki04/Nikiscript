// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }

// const result= addTwoNumbers(3,5)  =>8

// console.log("Result: ",result);  =>Result: undefined


 /*****************/

 
// function addition(num1 ,num2){
//     let res=num1 +num2
//     return res
// }

// const res=addition(3,5)
// console.log("Result: ",res);  =>Result:  8


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());


//console.log(loginUserMessage("nikita"));  =>nikita just logged in

//console.log(loginUserMessage(""));  => just logged in

// console.log(loginUserMessage());  =>undefined just logged in

