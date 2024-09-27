function findOccurance(n, arr) {
    if(typeof n !== "number") {
        console.log("Iltimos n parametri uchun faqat son kiriting !");
    }
     if(!Array.isArray(arr)) {
         console.log("Iltimos arr parametri uchun faqat massiv kiriting !");
         return;
     }
     
     const occurance = arr.reduce((acc, num) => {
         if(num === n) {
             acc++;
         }
         return acc;
     }, 0);
     
     console.log(occurance);
     
}

findOccurance(2, [2,2,3,2,5]);