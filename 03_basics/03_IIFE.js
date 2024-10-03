// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) => using immediately invoked functions to prevent the pollution due to the variables of functions in global scope.


//Named IIFE
 (function one(){
    console.log(`ONE`);
    
 })();


//SIMPLE IIFE
(()=>{
    console.log(`TWO`);
    
})();

(function three(){
    console.log(`THREE`);
    
})();

((name)=>{
    console.log(`FOUR `);
    
})();