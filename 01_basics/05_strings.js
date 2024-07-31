const name="nikita"
 const repocount=2

 //console.log(name + repocount+"value"); 

 //console.log(`Hello my name is ${name} and my rep count is ${repocount}`);

 const gameName= new String('nikitac')

// console.log(gameName[0]);   =>n
//console.log(gameName.__proto__);   =>{}

//console.log(gameName.length);   =>7
//console.log(gameName.toUpperCase());  =>NIKITAC
//console.log(gameName.charAt(5));    =>a
//console.log(gameName.indexOf('t'));   =>4
//console.log(gameName.substring(0,4));  =>niki

const anotherString= gameName.slice(-8,4)
//console.log(anotherString);   =>niki

const newStringOne="   nikita   "
//console.log(newStringOne);   =>  _nikita_
//console.log(newStringOne.trim());   =>nikita


const url="https://nikita.com/nikita%20rani"

//console.log(url.replace('%20','-'));  =>https://nikita.com/nikita-rani
//console.log(url.includes('nikita'));  =>true