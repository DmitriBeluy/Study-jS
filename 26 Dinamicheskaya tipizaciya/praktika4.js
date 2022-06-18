'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкотинация
console.log(typeof(5 + ''));  // при сложении со строкой  всегда получается строка

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number
// 1)
console.log(typeof(Number('4')));


// 2)
console.log(typeof(+ '5'));      // Унарный плюс - ставится перед строкой

// 3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");    // Получаем данные от пользователя и с помощью унарного плюса преобразовали их в числовые данные

// To boolean

//0, '', null, undefined, NaN;   ---- Всегда false

// 1)
let switcher = null;

if (switcher) {
    console.log( 'Working...');
}

switcher = 1;

if (switcher) {
    console.log( 'Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'44444444444444'));

