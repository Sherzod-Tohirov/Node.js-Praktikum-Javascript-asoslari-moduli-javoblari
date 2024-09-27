function returnThreeNumbers(a,b,c) {
    const isAllNumbers = typeof a === "number" && typeof b === "number" && typeof c === "number";
    
    if(!isAllNumbers) {
        console.log("Iltimos faqat sonlarni kiriting !");
        return null;
    }
    
   if(a <= 0 || b <= 0 || c <= 0) {
     console.log(0);
     return null;
   }
  
  return parseInt(`${a}${b}${c}`);
   
 }
 
 const numbers = returnThreeNumbers(4,5,6);
 
 console.log(numbers);