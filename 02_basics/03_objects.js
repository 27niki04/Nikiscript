//singleton
//object.create

//object literals
  const mySym=Symbol("key1")


const Jsuser={
    name:"Nikita",
    "full name":"Nikita Rani", //cannot be accesed using dot operator
    [mySym]:"mykey1",  //orrect syntax to define a symbol
    age:20,
    location:"Patna",
    email:"nikita@gmail.com",
    isLoggedIn: false,
    lastLogInDays:["Monday","Saturday"]

}

// console.log(Jsuser.email);  =>nikita@gmail.com
//console.log(Jsuser["email"]);   =>nikita@gmail.com
//console.log(Jsuser["full name"]);  =>Nikita Rani

//console.log(Jsuser.mySym); =>mykey1
// console.log(Jsuser[mySym]);  =>mykey1


//Object.freeze(Jsuser)
Jsuser.email="Nikita@123.com"

// console.log(Jsuser);
// {
//   name: 'Nikita',
//   'full name': 'Nikita Rani',
//   age: 20,
//   location: 'Patna',
//   email: 'nikita@gmail.com',
//   isLoggedIn: false,
//   lastLogInDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

Jsuser.greeting= function(){
  console.log("Hello JS Userr!");
  
}

Jsuser.greetingTwo= function(){
  console.log(`Hello JS Userr!, ${this.name}`);
  
}

console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo);
