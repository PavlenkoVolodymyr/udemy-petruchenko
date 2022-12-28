'use strict'

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

// console.log(personalMovieDB)

// if (4 == 9) {
//   console.log('OK!')
// } else {
//   console.log('ERROR')
// }

// const num = 50
// if (num < 49) {
//   console.log('Error')
// } else if (num > 100) {
//   console.log('So much')
// } else {
//   console.log('ok')
// }

// num === 50 ? console.log('ok!') : console.log('Error') // тернарный оператор

// const num = 50
// switch (num) {
//   case 49:
//     console.log('Неверно')
//     break
//   case 100:
//     console.log('Неверно')
//     break
//   case 50:
//     console.log('В точку')
//     break
//   default:
//     console.log('не в этот раз')
//     break
// }

// const apple = 2
// const orange = 3
// const lemon = 4
// let banana
// let pineaplle
// if ((banana = apple + orange) && (pineaplle = lemon + orange)) {
//   console.log(banana + 'шт', pineaplle + 'шт')
// } else {
//   console.log(Error)
// }

// let z = 50
// while (z <= 55) {
//   console.log(z)
//   z++
// }

// do {
//   console.log(z)
//   z++
// } while (z <= 55)

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break
//     continue
//   }
//   console.log(i)
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i)
//   for (let j = 0; j < 3; j++) {
//     console.log('n' + j)
//   }
// }

// let result = ''
// const length = 7

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*'
//   }
//   result += '\n'
// }
// console.log(result)

// function merriChristmas() {
//   const lines = 5
//   let result = ''
//   for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//       result += ' '
//     }
//     for (let j = 0; j < 2 * i; j++) {
//       result += '*'
//     }
//     result += '\n'
//   }
//   console.log(result)
// }

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`)

//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`)

//     for (let k = 0; k < 3; k++) {
//       if (k === 2) break first
//       console.log(`Third level: ${k}`)
//     }
//   }
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i)
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue
//   } else {
//     console.log(i)
//   }
// }

// let i = 2
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++
//     continue
//   } else {
//     console.log(i)
//   }
//   i++
// }

// const arrayOfNumbers = []

// for (let i = 5; i < 11; i++) {
//   arrayOfNumbers[i - 5] = i
// }

// console.log(arrayOfNumbers)
// return arrayOfNumbers

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50]
//   const result = []

//   return result
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '')

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b
//     console.log('done')
//   } else {
//     console.log('error')
//     i--
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов')
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель')
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман')
// } else {
//   console.log('Произошла ошибка')
// }

// console.log(personalMovieDB)

let num = 20
function showFirstMessage(text) {
  console.log(text)
  let num = 10
  console.log(num)
}

showFirstMessage('Hello World again')
console.log(num)

// function calc(a, b) {
//   return a + b
// }

// console.log(calc(4, 3))
// console.log(calc(5, 6))
// console.log(calc(10, 6))

function ret() {
  let num = 50

  //

  return num
}

const anotherNum = ret()
console.log(anotherNum)

const logger = function () {
  console.log('Hello')
}
logger()

const calc = (a, b) => {
  return a + b
}

const usdCurr = 40
const discount = 0.9

function convert(amount, curr) {
  return curr * amount
}

function promotion(result) {
  console.log(result * discount)
}

const res = convert(500, usdCurr)
promotion(res)

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
    if (i === 3) return
  }
  console.log('Done')
}
test()

function doNothing() {}
console.log(doNothing() === undefined)

function sayHello(name) {
  return `Привет, ${name}!`
}
sayHello('Anton')

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1]
}
returnNeighboringNumbers(5)

function getMathResult(num, times) {
  if (typeof times !== 'number' || times <= 0) {
    return num
  }

  let str = ''

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }

  return str
}

getMathResult(10, 5)

const str = 'teSt'
const arr = [1, 2, 3]
console.log(str.length)
console.log(str[2])
console.log(arr.length)
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())

const fruit = 'Some fruit'
console.log(fruit.indexOf('fruit'))

const logg = 'Hello world'
console.log(logg.slice(6, 11))
console.log(logg.slice(6))
console.log(logg.slice(-5, -1))
console.log(logg.substring(6, 11))

const numb = 12.2
console.log(Math.round(numb))

const test1 = '12.2px'
console.log(parseInt(test1))
console.log(parseFloat(test1))

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}
start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '')

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b
      console.log('done')
    } else {
      console.log('error')
      i--
    }
  }
}
rememberMyFilms()

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
  } else {
    console.log('Произошла ошибка')
  }
}
detectPersonalLevel()

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
  }
}
writeYourGenres()
