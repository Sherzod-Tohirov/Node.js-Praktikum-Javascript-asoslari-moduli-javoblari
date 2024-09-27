function reverseArray(arr) {
    if(!Array.isArray(arr)) {
        console.log("Iltimos faqat massiv kiriting !");
        return;
    }
    
    console.log([...arr.reverse()]);
    
}

reverseArray([1,2,3,4,5]);