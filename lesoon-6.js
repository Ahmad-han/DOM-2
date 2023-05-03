// Homework

// 1.Даны массив arr_1= [101, 202, 303, 404, 505] и arr_2 = [606, 707, 808, 909] 
//- создайте третий массив superArr который будет результатом "слияния" предыдущих двух. 
// Результатом должен быть массив superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909]

// const arr_1 = [101, 202, 303, 404, 505];

// const arr_2 = [606, 707, 808, 909];

// const superArr = [...arr_1, ...arr_2];

// console.log(superArr);

// console.log(Math.min(...superArr));




// 2.Дан объект obj со свойствами width: 300 и heigth: 550. 
// Создайте новый объект, который будет копией obj, но будет иметь еще и метод area(), 
// который должен вернуть произведение свойств width и height;
// 2.Создайте функцию которая принимает произвольное количество параметров и возвращает их сумму.


// function area(a, b) {
//     console.log(a + b); 
// };

// const obj = {width: 300, heigth: 550};




// Домашка по взаимодействию с html-страницей


// 1.Получить узел html

// const h = document.documentElement;

// console.log(h);




// 2.Поменять фоновый цвет всего документа на синий

// const bg = document.body.style.backgroundColor = "blue";




// 3.Пользуясь узлом document.body получить узлы <b> и <i>.

// const b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;

// const i = document.body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;

// console.log(b);
// console.log(i);




// 4.Поменять текст в обоих узлах

// const b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;

// const i = document.body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;

// const bTxt = b.textContent = "это жирный текст в первом блоке";

// const iTxt = i.textContent = "это курсивный текст во втором блоке";

// console.log(document.documentElement);



// 5.Задайте тегу <b> класс bold, а тегу <i> класс cursive

// const b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;

// const i = document.body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;

// const class1 = b.className = "one";

// const class2 = i.className = "two";

// console.log(document.documentElement);





// 6.Получить текстовый узел Линкод находящийся внутри тега <title>, 
// и поменять его на 'Lincode’.

// const title = document.head.lastChild.previousSibling;

// const changeTitle = title.textContent = "Lincode";

// console.log(title);





// 7.Удалить узел <b>**

// const b = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;

// const del = b.remove("b");

// console.log(document.documentElement);






// Домашка по Promise

// 1.Создайте промис, который возвращает случайное число от 1 до 10. 
// Затем обработайте этот промис, чтобы вывести результат в консоль.

// const promise = new Promise((resolve, rejected) => {
//     let randomNum = Math.random() * 10
//     if (randomNum) {
//         return resolve(randomNum)
//     }else {
//         return rejected ("new error")
//     }
// });

// promise.then((result) => {
//     return result;
// }).catch((error) => {
//     return rejected(error)
// })

// console.log(promise);








/* 2.Создайте функцию, которая принимает на вход число и возвращает промис.
Если число меньше 10, то промис должен быть выполнен успешно, иначе — 
с ошибкой. В случае успешного выполнения промиса выведите сообщение «Успех!», 
в противном случае — «Ошибка!». */

// const promise2 = new Promise((resolve, rejected) => {
//     let number = 5;
//     if (number < 10) {
//         return resolve(number);
//     }else {
//         return rejected("Ошибка!");
//     }
// });

// promise2.then((result) => {
//     return console.log(`Успешно: ${result}`);
// }).catch((error) => {
//     return console.log(error);;
// })

// console.log(promise2);


// второй вариант

// function getNumbers(number) {
//     const promise2 = new Promise((resolve, rejected) => {
//     if (number < 10) {
//         return resolve(number);
//     }else {
//         return rejected("Ошибка!");
//     }
// });
// promise2.then((result) => {
//     return console.log(`Успешно: ${result}`);
// }).catch((error) => {
//     return console.log(error);;
// })
// }

// getNumbers(15);



// 3.Создайте новый Promise, который сразу же переходит в состояние "resolved".

// const promise3 = new Promise((resolved) => {
//     return resolved("Успех")
// })

// promise3.then((result) => {
//     return console.log(result);
// })






// Задание 2: Использование setTimeout с Promise


/* 
1. Создайте Promise, который использует функцию `setTimeout` для имитации 
  асинхронной операции.
2. Задайте таймер на 2 секунды.
3. Выведите в консоль результат обработки этого Promise с помощью метода `then()`.
*/


// const TimeSeconde = () => {
//     const promise = new Promise((resolve) => {
//         return resolve("Этот промис выполнится через две секунды");
//     })
    
//     promise.then((result) => {
//         return console.log(result);
//     });
// }


//второй вариант

// setTimeout(() => {
//     const promise = new Promise((resolve) => {
//         return resolve("Данное сообщение пользователь увидет через 2 секунды после обновления страницы")

//     })

//     promise.then((result) => {
//         return console.log(`Вот результат выполнения ассинхронного кода: ${result}`);
//     })
// }, 2000)







// Деструктуризация

/*
1. Создайте массив `numbers` с элементами `[1, 2, 3]`.
2. Используйте деструктуризацию, чтобы создать три переменные `a`, `b` и `c` 
и присвоить им значения из массива `numbers`.
3. Выведите переменные `a`, `b` и `c` в консоль.
*/

// const numbers = [1, 2, 3];

// const [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);






/*
1. Создайте объект `person` со свойствами `name`, `age` и `city`.
2. Используйте деструктуризацию, чтобы создать переменные `name`, `age` и `city` 
и присвоить им значения из объекта `person`.
3. Выведите переменные `name`, `age` и `city` в консоль.
*/

// const person = {name: "John", age: 25, city: "NY"};

// const {name, age, city} = person;

// console.log(name);
// console.log(age);
// console.log(city);







/*
1. Создайте массив `letters` с элементами `['a', 'b', 'c', 'd', 'e']`.
2. Используйте деструктуризацию, чтобы создать переменные `first`, `second` и `rest` 
и присвоить им значения из массива `letters`.
3. Выведите переменные `first`, `second` и `rest` в консоль.
*/

// const letters = ['a', 'b', 'c', 'd', 'e'];

// const [first, second, ...rest] = letters;

// console.log(first);
// console.log(second);
// console.log(...rest);







/*
1. Создайте объект `student` со свойствами `name`, `age` и `address`, 
  где `address` является объектом с полями `city` и `country`.
2. Используйте деструктуризацию, чтобы создать переменные `name`, `age`, `city` и 
    `country`, присвоив им значения из объекта `student`.
3. Выведите переменные `name`, `age`, `city` и `country` в консоль.
*/


// const student = {name: "Mike", age: 30, adress: {city: "LA", country: "USA"}};

// const {name, age, adress} = student;

// const {city, country} = adress;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(country);

