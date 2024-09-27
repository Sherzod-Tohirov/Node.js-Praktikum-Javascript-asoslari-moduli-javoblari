function sortByAsc(arr){
    if(!Array.isArray(arr)) {
        console.log("Iltimos faqat massiv kiriting !");
        return;
    }
    
    const sortedArr = arr.sort((a,b) => {
        const intA = parseInt(a);
        const intB = parseInt(b);
        
        if(intA > intB) {
            return 1;
        }
        
        if(intA < intB) {
            return -1;
        }
        
        else {
            return 0;
        }
    });
    
    console.log(sortedArr);
}

sortByAsc([4,5,4,5,7,1,2,10,2,5])
