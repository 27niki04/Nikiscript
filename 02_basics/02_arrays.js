const marvel_heroes=["thor","Spiderman","ironman"]
const dc_heroes=["superman","flash","batman"]


//********PUSH OPERATOR */

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);  =>[ 'thor', 'Spiderman', 'ironman', [ 'superman', 'falsh', 'batman' ] ]

///console.log(marvel_heroes[3][1]); =>flash


//*********CONCAT OPERATOR***********


const allHeroes=marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);  =>[ 'thor', 'Spiderman', 'ironman', 'superman', 'flash', 'batman' ]


//*********SPREAD OPERATOR************

const all_new_heroes=[...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes);  =>[ 'thor', 'Spiderman', 'ironman', 'superman', 'flash', 'batman' ]

//********FLAT OPERATOR */

const arr=[1,2,3,[4,5],[6,7,[8,9]]]
const real_arr=arr.flat(Infinity)

//console.log(real_arr);  
// =>[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

//console.log(Array.isArray("Nikita"));   =>false

//console.log(Array.from("Nikita"));  =>[ 'N', 'i', 'k', 'i', 't', 'a' ]

//console.log(Array.from({Name:"Nikita"}));  =>[]  **Interesting


let a=1
let b=2
let c=3

//console.log(Array.of(a,b,c));  =>[ 1, 2, 3 ]
