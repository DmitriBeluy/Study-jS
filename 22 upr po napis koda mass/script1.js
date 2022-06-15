'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return console.log(str);
}

showFamily(family);                                             // 1 zadacha



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(city => {
       console.log(city.toLowerCase());
   }); 
    
}

standardizeStrings(favoriteCities);                         // 2 zadacha




/* const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    return console.log(str.split('').reverse().join('')); 
}

reverse(someString);                */                                 // 3 zadacha 1 sposob



const someString = 'This is some strange string';

function reverse(str) {
let newStr = '';
for (let i = str.length - 1 ; i >= 0; i--) {
    newStr += str[i];
    
}
return console.log(newStr);
}

reverse(someString);                                            // 3 zadacha 2 sposob




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
let str = '';
arr.length === 0? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
arr.forEach(function(curr, i){
    if (curr != missingCurr) {
        str += `${curr}\n`;
    }
});
return console.log(str);
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');    // 4 zadacha 1 sposob



