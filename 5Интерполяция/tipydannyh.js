"usestrict";

let number = 4.6; // просто числовые данные

console.log(-4/0); // выводит показатель infinity
console.log('string' * 9); //выводит показатель Nan not a number

const persone = "dasdsadasdas dsadasdas"; // если ставить кавычки, то это строка

const bool = false; // логический тиа да/нет

//console.log( something);  //null это если переменная вообще не задана, не существует

let und;
console.log(und); // переменная есть, но не задано значение

const obj = {
    name: "John",
    age: 25,
    isMarried: false  // этот объект содержит разные типы данных. Помечается не через присваивание а через двоеточие
};

//console.log(obj.name); // обратились к одному из свойств объекта obj - name.
console.log(obj ["name"]); // можно писать через квадратные скобки 


let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []]; // массив, который может содержать набор инфы: картинки, числа, объекты с данными и  пустой массив  и тд
console.log(arr[1]); // вывело нам в консоли jrange.jpeg тк он стоит на втором месте 