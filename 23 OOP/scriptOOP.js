'use strict';

let str = 'some';
let strObj = new String(str);

/* console.log(typeof(str));
console.log(typeof(strObj)); */

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    } 
};

const john = Object.create(soldier);            // устанавливаем наследование прототипа сразу при сощдании переменной

/* const john = {
    health: 100
};
 */
//john.__proto__ = soldier;              // старый метод! мы установили прототипом джона - солдата

Object.setPrototypeOf(john, soldier);    // современный метод , сначала в скобках пишеттся кто наследует, потом от кого наследует

//console.log(john);
//console.log(john.armor);               //благодаря прототипам джлн получил свойство солдата, хоть сам этого свойства не имел 
john.sayHello();

