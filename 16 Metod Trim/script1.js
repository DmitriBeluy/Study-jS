'use strict';
let numberOfFilms; // поместили ответ в переменную

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');   

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');    
    }
} 

start();

const personalMovieDB = {
    count: numberOfFilms, // поместили ответ на первый вопрос в свойство count
    movies: {},    // поместили пустой объект
    actors:{},     // поместили пустой объект
    genres:[],     // поместили пустой массив
    privat:false   // логический оператор 
};




function rememberMyFilms() {
    for ( let i  = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?",'').trim(),   // 2 zadanie 1 sposob
              b = prompt('На сколько оцените его?','');  
              
              if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                  personalMovieDB.movies[a] = b; 
                  console.log( 'done');
              } else { 
                console.log('error');  
                i--;
    
              }
    
    
        
    }
}

rememberMyFilms();


function detectPersonalLevel() {
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
    
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for ( let i=1; i < 4; i++){
        personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();



/* function ploKuba(rebro) {
    if (typeof(rebro) !== "number" || rebro < 0 || !Number.isInteger(rebro)) {
        return console.log("При вычислении произошла ошибка");
    } 
    return console.log(`Объем куба:${rebro*rebro*rebro},площадь всей поверхности:${6*rebro*rebro}`);                // задачи со звездой 1
    
    

}
ploKuba(5); */



/* function getCoupeNumber (seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return console.log("Ошибка.Проверьте правильность введенного номера места");
    } 
    if (seatNumber === 0 || seatNumber > 36) {
        return console.log("Таких мест в вагоне не существует");
    }
    for ( let i = 4; i <= 36; i= i + 4) {
        if (seatNumber <=i) {                                                                                                   // задача  со звездой 2
            return console.log(Math.ceil (i / 4));
        }
    }
}
getCoupeNumber(1.2); */
                     






