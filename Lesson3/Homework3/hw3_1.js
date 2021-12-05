// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numsArray = [33,44,55,66,77];
// console.log(numsArray)
//
// let stringArray = ['one', 'two', 'three', 'four', 'five'];
// console.log(stringArray)
//
// let mixArray = [23, true, 'ten', false, 'nine', 54]
// console.log(mixArray)
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let emptyArray = [];
// emptyArray[0] = 34;
// emptyArray[1] = 'china';
// emptyArray[2] = true;
// emptyArray[3] = 123;
// emptyArray[4] = 'Japan'
// console.log(emptyArray)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>someText</div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>someText ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// i=0;
// while (i<20){
//     document.write(`<h1>just text</h1>`)
//
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// i=0;
// while (i<20){
//     document.write(`<h1>just text ${i}</h1>`)
//     i++
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayOfNums = [11,12,13,14,15,16,17,18,19,20];
// for (let items of arrayOfNums) {
//     console.log(items)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayOfStr = ['let', 'my', 'people', 'go']
// for (let words of arrayOfStr) {
//     console.log(words)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayOfAll = [33, 'some', 'text', true, 76, 'goodbuy', false, 43, 'Jungo'];
// for (let info of arrayOfAll) {
//     console.log(info)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayOfAll = [33, 'some', 'text', true, 76, 'goodbuy', false, 43, 'Jungo'];
// for (let items of arrayOfAll) {
//     if(typeof items === 'string'){
//         console.log(items)
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let emptyArray = []
// emptyArray[0] = 34;
// emptyArray[1] = true;
// emptyArray[2] = 'letsgo';
// emptyArray[3] = 'yanki';
// emptyArray[4] = false;
// emptyArray[5] = 'new year';
// for (let items of emptyArray) {
//     console.log(items)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i+=2){
//     console.log('current step: '+i+'');
//     document.write('<div>current step: '+i+'</div>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(!i%2===0){
//         console.log(i)
//     }
// }

