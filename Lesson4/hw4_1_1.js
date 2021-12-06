// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//=========Variant 1============
// let a = 5;
// let b = 6;
// function getSofRect(){
//     return a*b
// }
// let res = getSofRect()
// console.log(res)

//=========Variant 2============

// function getSofRect2(a,b){
//     return a*b;
// }
// let res2 = getSofRect2(3,4);
// console.log(res2)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function getSofRing(r){
//     let pi = 3.14;
//     let r2 = r**2
//     return pi*r2
// }
// let result = getSofRing(5);
// console.log(result)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [11,22,33,44,55]
// function showArray(arr){
//     for (let number of arr) {
//         console.log(number)
//     }
// }showArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function showP(text){
//     document.write(`<p>${text}</p>`)
// }
// showP('pryvit')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function showUl(text,size){
//     for (let i = 0; i < size; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// showUl('greeting', 20)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [11, true, 'gentherm', 'super', false, 44, 'house'];
// function createList(arr){
//     for (let item of arr) {
//         document.write(`<ul>`)
//         document.write(`<li>${item}</li>`)
//         document.write(`</ul>`)
//     }
// }createList(array)

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arrayOfObjects = [
//     {id: 1, name: 'valya', age: 36},
//     {id: 2, name: 'tolya', age: 37},
//     {id: 3, name: 'regina', age: 9},
//     {id: 4, name: 'tolichek', age: 4}
// ]
// function getListofObjects(arr){
//     for (let obj of arr) {
//             document.write(`<div>${obj.id}.${obj.name} - ${obj.age}</div>`)
//     }
// }
// getListofObjects(arrayOfObjects)