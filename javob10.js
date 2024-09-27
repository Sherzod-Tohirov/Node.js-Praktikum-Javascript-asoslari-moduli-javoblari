function findSumOfDigits(a) {
    if(typeof a !== "number") {
        console.log("Iltimos faqa son kiriting !");
        return;
    }
    
    if(a <= 0) {
        console.log("Iltimos faqat musbat son kiriting !");
        return;
    }
    
    const sum = String(a).split("").map(num => parseInt(num)).reduce((acc, num) => acc += num, 0);
    console.log(sum); 
}

findSumOfDigits(12345);