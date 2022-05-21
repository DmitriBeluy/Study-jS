'use strict';

function first() {
    // do somesthing
    setTimeout (function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

/* function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);                      // В вызываемой функции создаем функцию, которая пойдет в аргумен callback
    callback();    
}  

learnJS("JavaScript", function(){
    console.log('Я прошел этот урок!');             
}); */

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();    
}  

function done() {
    console.log('Я прошел этот урок');    // Помещаем ранее созданную фуекцию в аргуент
}

learnJS("JavaScript", done);