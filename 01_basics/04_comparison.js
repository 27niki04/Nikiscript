// console.log(2>1); =>true
// console.log(2>=1); =>true
// console.log(2<1); =>false
// console.log(2==1); =>false
// console.log(2!=1); =>true


// console.log("2">1); =>true
// console.log("02">1); =>true

// console.log(null>0); =>false
// console.log(null==0); =>false
// console.log(null>=0); =>true

//An equality check == and comparisons >,<,>=,<= work differently.
// Comparisons convert null to a number,treating it as 0, that's why null>=0 is true and null>1 is false.

console.log("2"===2);//strict check =>compares value as well as data type