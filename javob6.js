
function findSum(a) {
    if (typeof a !== "number") {
        console.log("Iltimos faqat son kiriting !");
        return;
    }7
    
    if(a < 0) {
        console.log("Iltimos faqat musbat son kiriting !");
        return;
    }
    
    if(a === 0) {
        console.log(0);
        return;
    }
    
    let sum = 0;
    for(let i = 1; i <= a; i++) {
        sum += i;
    }
    console.log(sum);
}

findSum(10);

