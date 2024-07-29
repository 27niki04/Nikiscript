// primitive Type:

// 7types: string,number,boolean,null,undefined,symbol,BigInt

//datatype of null=>object

//js is a dynamically types language-variables can hold values of different types during runtime
  const id=Symbol('123')
  const anotherId=Symbol('123')

  console.log(id===anotherId); //=>false
 
  const bigNumber=12345678945613n

//Reference (Non-primitive)Type:  =>datatype:object

//Arrays,Objects,Functions 

const heros=["A","B","C"];

let myObj={
  name:"Nikita",
  age:20,
}

 const myFunction=function(){
  console.log("Hello World");
 }