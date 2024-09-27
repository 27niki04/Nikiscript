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
//console.log(loginUserMessage());


//console.log(loginUserMessage("nikita"));  =>nikita just logged in

//console.log(loginUserMessage(""));  => just logged in

// console.log(loginUserMessage());  =>undefined just logged in

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,600));  =>[ 200, 500, 600 ]

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}

// console.log(calculateCartPrice(200,500,600,2000));  =>[ 600, 2000 ]

// const user={
//     username:"nikita",
//     price:199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }

// handleObject(user)  =>Username is nikita and price is 199

const arr=[200,400,600]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(arr)); =>400
// console.log(returnSecondValue([200,400,600]));  =>400

