// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calcRect(a, b){
//     return a * b;
// }
// let result = calcRect(5, 9);
// console.log(result);
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calcRingS(rad){
//     let pi = 3.14;
//     let r = rad ** 2;
//     return pi * r;
// }
// let resultS = Math.round(calcRingS(8));
// console.log(resultS);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r - 2piRH

// function calcCyl(h, r){
//     let pi = 3.14;
//     return 2 * pi * h * r;
// }
// let result = Math.round(calcCyl(4, 6));
// console.log(result);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['qwrq', 'qweqwe']
// function funcArr(array){
//     for (const item of array) {
//         console.log(item)
//     }
// }
// funcArr(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function showPag(text){
//     document.write(`<p>${text}</p>`)
//     }
// showPag('hello okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function showUl(text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// showUl('Privet')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function showUl(text, quantity){
//     document.write(`<ul>`);
//     for (let i = 0; i < quantity; i++) {
//     document.write(`<li>${text}</li>`);
//             }
//     document.write(`</ul>`);
// }
// showUl('Privet', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [2, 4, 5, 'privet', true, 'kak dela', false];
// function arraylist(arrayS){
//     document.write(`<ul>`)
//     for (let items of array) {
//         document.write(`<li>${items}</li>`);
//     }
//     document.write(`</ul>`)
// }
// arraylist(array)
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {id: 234, name: 'pupkin', age: 35},
//     {id: 543, name: 'dulin', age: 32},
//     {id: 987, name: 'mykhalych', age: 45}
// ]
// function contacts(arrayS){
//     for (let items of arrayS) {
//         document.write(`<div>${items.id} - ${items.name} - ${items.age}</div>`);
//     }
// } contacts(array);
