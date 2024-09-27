function isPalindrome(a) {
    if(typeof a !== "number") {
        console.log("Iltimos faqa son kiriting !");
        return;
    }
    
    if(a <= 0) {
        console.log("Iltimos faqat musbat son kiriting !");
        return;
    }
   
    console.log(a === parseInt(String(a).split("").reverse().join("")));
}

isPalindrome(12321);
