
function findHowManyDigits(a) {
    if(typeof a !== "number") {
        console.log("Iltimos faqat son kiriting (1 - 999) !");
        return;
    }
    
    return String(a).length;
}

const digits = findHowManyDigits(4);
console.log(digits);
