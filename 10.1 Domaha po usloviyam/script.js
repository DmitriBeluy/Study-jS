'use strict';

if (4) {
    console.log('OK!');
} else{
    console.log('Error');
}

/* const num = 50;
if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log('OK!');
}


(num === 50) ? console.log('OK!') : console.log('Error'); */

const num = '50';


switch (num) {
    case '49':
            console.log("неверно");
            break;
    case '100':
            console.log('неверно');
            break;
    case '50':
            console.log('в точку');
            break;
    default:
            console.log('не в этот раз');
            break;

    
}


// DOMASHKA PO LOGICHESKIM OPERATORAM

console.log( NaN || 2 || undefined);

console.log( NaN && 2 && undefined);

console.log( !1 && 2 || !3);

console.log( 25 || null && !3);

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log("Done")
} */


/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets){
    console.log( 'Done');
} */


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log( 'Done');
} else {
    console.log('ya vse ponyal');
}

