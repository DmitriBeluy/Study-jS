'use strict';

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello world');
console.log (num);


/* let num = 20;

function showFirstMessage (text) {
    console.log(text);
    
    console.log(num);
}                                                       // замыкание функции-это когда мы убрали из нее переменную и функция пошла искать ее уровнем выше! поэтому выполнится консоль лог 2 раза один внтури нее с внешней переменной , один снаружи с внешнейй  переменной

showFirstMessage('Hello world');
console.log (num); */


/* function calc(a, b) {
    return (a + b);
}
console.log(calc( 4, 3));
console.log(calc( 9, 3));
console.log(calc( 6, 3)); */

function ret() {
    let num = 50;






    return num;
}

const anotherNum = ret();
console.log(anotherNum);                            // возвращение переменной наружу с помощью return



let logger = function () {
    console.log('hello');
};

logger();                                               // function expression создается только тогда , когда доходит поток кода, можно вызвать только после объявления



const calc = (a, b) => {
    //console.log('1');
    return a + b;                        // стрелочная функция, знак => означает запуск выполнения того. то стоит после нее
    

}; 
console.log(calc(4, 2));  
                     