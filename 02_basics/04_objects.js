//const User=new Object()
const User={}
User.id="123"
User.name="Nikita"
User.isLoggedIn=false
// 

const regularUser={
    email:"nikita123@gmail.com",
    fullname:{
        userfullname:{
        firstname:"Nikita",
        lastname:"Rani"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

 const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

//const obj3={obj1,obj2} =>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


//const obj3=Object.assign(obj1,obj2) =>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//const obj3=Object.assign({},obj1,obj2,obj4)=>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//const obj3={...obj1,...obj2,...obj4}  =>spread operator
//console.log(obj3); 
const users=[
    {id:1,
    email:"h@123.gmail"
    },
    {
        id:2,
        email:"p@256.gmail.com"
    },
    {
        id:3,
        email:"123@J"
    }
]

users[1].email
// console.log(User); =>{ id: '123', name: 'Nikita', isLoggedIn: false }


// console.log(Object.keys(User)); =>[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(User)); =>[ '123', 'Nikita', false ]
//console.log(Object.entries(User));  =>[ [ 'id', '123' ], [ 'name', 'Nikita' ], [ 'isLoggedIn', false ] ]

//console.log(User.hasOwnProperty('isLoggedin'));   =>false

const course={
    coursename: "English",
    price: "999",
    courseInstructor:"Nikita"
}

//course.courseInstructor

const {courseInstructor} = course

// console.log(courseInstructor); =>Nikita

const {courseInstructor: instructor} =course

//console.log(instructor);  =>Nikita

const  navbar= () =>{

}
 navbar():void
 




