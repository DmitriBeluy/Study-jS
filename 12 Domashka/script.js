for(let i=5; i<11; i++){console.log(i);          // 1 zadacha
}

/* for(let i=20; i>9; i--) {
    if (i===13){                                
        break;
    }
    console.log(i);                         // 2 zadacha
} */

for (let i=1; i<11; i++){
    if ( i % 2 !== 0) {
    
        continue;                           // 3 zadacha
    }
    console.log(i);

}


 for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
         continue;
     } else {
        console.log(i);
     }
 }


 let i = 2;
 while (i < 16) {
     i++;
     if(i % 2 === 0) {
         continue;
     } else {
         console.log(i);                // 4 zadacha
     }
 }





 

 


 

    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;                  // 5 zadacha
    }

    console.log(arrayOfNumbers);
     
   


    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {              // 1 zadacha *
        result[i] = arr[i];
    }

    console.log(result);



    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {              // 2 zadacha *
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
  




    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {                    // ne ponyal
        result[i - 1] = data[data.length - i];
    }

    console.log(result);