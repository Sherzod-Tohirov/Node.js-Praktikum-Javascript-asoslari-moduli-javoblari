function amountOfDigits(a) {
    if(typeof a !== "number") {
        console.log("Iltimos faqa son kiriting !");
        return;
    }
    
    if(a <= 0) {
        console.log("Iltimos faqat musbat son kiriting !");
        return;
    }
   
    console.log(String(a).length);
    
}

amountOfDigits(456);