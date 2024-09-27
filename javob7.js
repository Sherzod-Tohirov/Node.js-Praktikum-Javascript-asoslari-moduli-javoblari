
function isComplexNumber(a) {
    if(typeof a !== "number") {
        console.log("Iltimos faqa son kiriting !");
        return;
    }
    
    if(a <= 0) {
        console.log("Iltimos faqat musbat son kiriting !");
        return;
    }
    let sum = 0;
    for(let i = 1; i < a; i++) {
        if(a % i === 0) {
            sum += i;
        }
    }
    
    console.log(sum === a);
    
}

isComplexNumber(6)

