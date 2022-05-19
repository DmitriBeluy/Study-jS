const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promotion (result){
    console.log(result * discount);
}

const res = convert(500, usdCurr);           //можно не помещая функцию в функцию просто задать результат первой как переменную и поместить ее во вторую как аргумент
promotion(res);

//promotion(convert(500, usdCurr));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return                 // функция прекращается на тройке после return и выводит в консоль только 0,1,2,3
    }
    console.log('Done');
}
test();    


function doNothing() {}
console.log(doNothing() === undefined);     // без return функция возвращает undefiend!!!!


function sayHello (name) {
    return console.log(`Привет, ${name}!`) ;
                                                
}
sayHello('Антон');                  // первая задача вернуть строку привет, Андрей


function returnNeighboringNumbers(num) {
       return  console.log([num - 1, num, num + 1])  ;
}
    
returnNeighboringNumbers(5);                    // вторая задача поместить числов аргумент и вернуть массив с уменьшенным числом и увеличенным, и самим аргументом


/* function getMathResult(num, num1) {
    if (typeof(num1) !== 'number' || num1 <= 0){
        return num;
    }
}

    let str = '';
    
getMathResult(10, 5); */




function getMathResult(num, num2) {
    if (typeof(num2) !== 'number' || num2 <= 0) {
        return console.log(num) ;
    }

    let str = '';

    for (let i = 1; i <= num2; i++) {
        if (i === num2) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return console.log(str) ;
}

getMathResult(3, 5);

