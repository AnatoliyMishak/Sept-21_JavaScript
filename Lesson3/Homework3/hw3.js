




// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let numarr = [4, 5, 6, 7, 8];
// console.log(numarr);
// let strarr = ['four', 'five', 'six', 'seven', 'eight'];
// console.log(strarr);
// let mixarr = [4, 'five', true, 6, 'seven'];
// console.log(mixarr);


// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let emptyarray = [];
// emptyarray[0] = 'Bosnia and Herzegovina';
// emptyarray[1] = 'Ukraine';
// emptyarray[2] = 0;
// emptyarray[3] = 3;
// emptyarray[4] = 'Katar';
// emptyarray[5] = 2022;
// emptyarray[6] = true;
// console.log(emptyarray);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//     document.write('<div>');
// for (let i = 0; i < 10; i++ ){
//     document.write('<div>Guta by tya pobyla</div>');
// }
//     document.write('</div>');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write('<div>');
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Pahly by tya gady ${i}</div>`);
// }
// document.write('</div>');


<!-- - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.-->

// let t = 0;
// while (t<20){
//     t++
//     document.write(`<h1>example</h1>`)
// }

<!-- - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.-->

// let t = 0;
// while (t<20){
//     t++
//     document.write(`<h1>example ${t}</h1>`)
// }

<!-- - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.-->

// let array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
// for (let t=0; t<10; t++){
//     console.log(array[t])}
//

<!-- - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.-->

// let array = ['ko toto', 'na nya pozeratj', 'z obrazchyka', 'na stini', 'to nash uyko', 'to ye lenin', 'vun', 'takyj', 'blyzkyy', 'mini'];
// for (let t=0; t<10; t++){
//     console.log(array[t])
// }

<!-- - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.-->

// let array = [26, true, 'z obrazchyka', 34, 43, false, 'vun', 76, true, 'mini'];
// for (let t=0; t<10; t++){
//     console.log(`${array[t]}`)
// }

<!-- - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи-->
<!-- - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи-->
<!-- - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи-->

// let array = [26, true, 'z obrazchyka', 34, 43, false, 'vun', 76, true, 'mini'];
// for (let t=0; t<array.length; t++){
//     if (typeof array[t] === 'boolean'){
//     console.log(array[t])
//             }
// }

// let array = [26, true, 'z obrazchyka', 34, 43, false, 'vun', 76, true, 'mini'];
// for (let t=0; t<array.length; t++){
//     if (typeof array[t] === 'string'){
//         console.log(array[t])
//     }
// }

// let array = [26, true, 'z obrazchyka', 34, 43, false, 'vun', 76, true, 'mini'];
// for (let t=0; t<array.length; t++){
//     if (typeof array[t] === 'number'){
//         console.log(array[t])
//     }
// }

<!-- - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.-->

// let lastarray = [];
// lastarray[0] = true;
// lastarray[1] = 26;
// lastarray[2] = 'name';
// lastarray[3] = 'work';
// lastarray[4] = false;
// lastarray[5] = true;
// lastarray[6] = 11;
// lastarray[7] = 'home';
// lastarray[8] = 1984;
// lastarray[9] = 'dog';
//
// for(t=0; t<lastarray.length; t++)
// {
//     console.log(lastarray[t])
// }

<!-- - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write-->

// // for (let t=0; t<10; t++){
// //     console.log('current step '+t+'')
// document.write(`<div>`)
// document.write('current step '+t+'')
// document.write(`</div>`)
//
// // }
<!-- - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write-->

// for (let t=0; t<100; t++){
//     console.log('current step '+t+'')
//     document.write(`<div>`)
//     document.write('current step '+t+'')
//     document.write(`</div>`)
// }


<!-- - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write-->

// for (let t=0; t<100; t+=2){
//     console.log('current step '+t+'')
//     document.write(`<div>`)
//     document.write('current step '+t+'')
//     document.write(`</div>`)
// }



<!-- - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write-->

// for (let t=0; t<100; t++){
//     if (t%2===0){
//     console.log('current step '+t+'')
//     document.write(`<div>`)
//     document.write('current step '+t+'')
//     document.write(`</div>`)}
// }

<!-- - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write-->

// for (let t=0; t<100; t++){
//     if (t%2!==0){
//         console.log('current step '+t+'')
//         document.write(`<div>`)
//         document.write('current step '+t+'')
//         document.write(`</div>`)}
// }
