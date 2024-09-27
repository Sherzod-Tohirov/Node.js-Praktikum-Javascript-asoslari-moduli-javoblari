function returnSecondLargestElement(arr){
    if(!Array.isArray(arr)) {
        console.log("Iltimos faqat massiv kiriting !");
        return;
    }
    
    let secondLargestEl = arr[0];
    if(arr.length > 1) {
         const largest = Math.max(...arr);
         for(let i = 1; i < arr.length; i++) {
            if(arr[i] >= secondLargestEl && arr[i] < largest) {
                secondLargestEl = arr[i];
            }   
         }
    }else {
        console.log(`Berilgan massivda faqat bir dona element mavjud: ${secondLargestEl}`);
        return;
    }
   
   console.log(`Massivdagi eng katta ikkinchi element bu: ${secondLargestEl}`)
}

returnSecondLargestElement([4,5,4,5,7,1,20,10,15,2,5])

