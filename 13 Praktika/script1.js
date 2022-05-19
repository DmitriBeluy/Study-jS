/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания

'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''); // поместили ответ в переменную

const personalMovieDB = {
    count: numberOfFilms, // поместили ответ на первый вопрос в свойство count
    movies: {},    // поместили пустой объект
    actors:{},     // поместили пустой объект
    genres:[],     // поместили пустой массив
    privat:false   // логический оператор 
};

/* const a = prompt("Один из последних просмотренных фильмов?",''), // задали вопрос 1 раз
      b = prompt('На сколько оцените его?',''),                  // задали вопрос 1 раз
      c = prompt("Один из последних просмотренных фильмов?",''), // задали 2 раз
      d = prompt('На сколько оцените его?','');                  // задали 2 раз (обозначив разными переменными)

personalMovieDB.movies[a] = b; // обращение к свойству movies и запись (также можно обратиться через movies.a = b;)
personalMovieDB.movies[c] = d; */

/* 
for ( let i  = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?",''),   // 1 zadanie
          b = prompt('На сколько оцените его?','');                  
    personalMovieDB.movies[a] = b;
}
 */

console.log(personalMovieDB);

/* 
for ( let i  = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?",''),   // 2 zadanie 1 sposob
          b = prompt('На сколько оцените его?','');  
          
          if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
              personalMovieDB.movies[a] = b; 
              console.log( 'vse zbs');
          } else { 
            console.log('error');  
            i--;

          }


    
}
 */




/* let i = 0;
while ( i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?",''),   // 2 zadanie 2 sposob
          b = prompt('На сколько оцените его?',''); 
          i++;
          if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
              personalMovieDB.movies[a] = b;
              console.log('done');
          } else {
              console.log('error');
              i--;
          }  
} */

let i = 0;

do {
    const a = prompt("Один из последних просмотренных фильмов?",''),   // 2 zadanie 3 sposob
          b = prompt('На сколько оцените его?',''); 
          i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
}   while ( i < 2);






















if (personalMovieDB.count <= 10) {
    alert('prosmotreno dovolno malo filmov');    // 3 zadanie moy variant
} else {
    if ( personalMovieDB.count <= 30) {
        alert('vy classic zritel');
    } else {
        if (personalMovieDB.count > 30) {
            alert('vy kinoman');
        } else {
            alert('proizoshla oshibka');
        }
    }
}


console.log(personalMovieDB);



