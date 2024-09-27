
function isAllPositive(a,b,c,d) {
    const digits = [a,b,c,d];
    let positive = 0;
    for(let i = 0; i< digits.length; i++) {
        if(typeof digits[0] !== "number") {
            console.log("Iltimos faqat son kiriting !");
            return;
        }
        
        if(digits[i] > 0) positive++;
    }
    
    console.log(digits.length === positive);

}

isAllPositive(10,20,30,-40)