// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calcRectangle(a, b){
//     let result = a * b;
//     return result;
// }
//
// let rectangleS = calcRectangle(5, 6);
// console.log(rectangleS);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// Формула площі кола - PI*r**2

// function calcRing(pi, r){
//         let resultRing = pi * r**2;
//     return resultRing;
// }
// let ringS = calcRing(3.14, 6);
// console.log(Math.round(ringS));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// Формула площі поверхні циліндра - 2PIrh

// function calcCylinder (pi, r, h){
// let resultCylinder = 2 * pi * r * h;
//     return resultCylinder;
// }
// let cylinderS = calcCylinder(3.14, 3, 9);
// console.log(Math.round(cylinderS));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function showArray (array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//             }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function showParagraph(text){
//     document.write(`<p>${text}</p>`)
// }
// showParagraph('Privet, kak dela?')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function showText(a){
//     document.write(`<ul>`);
//         document.write(`<li>${a}</li>`);
//         document.write(`<li>${a}</li>`);
//         document.write(`<li>${a}</li>`);
//     document.write(`</ul>`);
// }
//   showText('Lemberg');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function showText(a, size){
//     document.write(`<ul>`);
//     for (t=0; t<size; t++){
//     document.write(`<li>${a}</li>`);
//     }
//     document.write(`</ul>`);
// }
// showText('Lemberg', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let primitiveArray = ['I', 'like', 'owu', 'trainings', 2021, true, false, 34, 56, 76];
// function createList(array){
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createList(primitiveArray);

    //
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let lastArray = [
    {id : 1234,
        name: 'Tolik',
        age: 37
    },
    {
        id: 3446,
        name: 'Vanya',
        age: 23
    },
    {
        id: 9876,
        name: 'Masha',
        age: 33
    },
    {
        id: 4235,
        name: 'Regina',
        age: 9
    }

];
function arrayOfcontacts(array){

document.write(`<div>`);
    for (const item of array) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
    }
document.write(`</div>`);

}
arrayOfcontacts(lastArray);

