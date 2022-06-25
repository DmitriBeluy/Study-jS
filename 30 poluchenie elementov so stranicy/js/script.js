'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');
//const btns = document.getElementsByTagName('button')[1];   можно вытащить определенную кнопку обратившись к элементу этого массива
console.log(btns[0]);     // ну или сразу за названием переменной вот так btns[0]

const circles = document.getElementsByClassName('circle'); 
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); 
console.log(oneHeart);