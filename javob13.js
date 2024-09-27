function findSumAndEquality(n, arr) {
    if(typeof n !== "number") {
        console.log("Iltimos n parametri uchun faqat son kiriting !");
    }
     if(!Array.isArray(arr)) {
         console.log("Iltimos arr parametri uchun faqat massiv kiriting !");
         return;
     }
    const numbers = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] === undefined) break;
            if(arr[i] + arr[j] === n) {
                if(!numbers.length) {
                    numbers.push([arr[i], arr[j]]);
                    continue;
                }
                
                for(let k = 0; k < numbers.length; k++) {
                    if(numbers[k]?.includes(arr[i]) && numbers[k]?.includes(arr[j])) {
                        break;
                    }
                    if(k === numbers.length - 1) {
                        numbers.push([arr[i], arr[j]]);
                    }
                }
            }
        }
     
    }
    if(!numbers.length) {
      console.log("Unday sonlar mavjud emas !");
    }
    
    console.log(numbers);
     
}

findSumAndEquality(4, [2,2,5,3,1,4,0]);




