// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for

let numArray = [2,17,13,6,22,31,45,66,100,-18]
// for (let j = 0; j < numArray.length; j++) {
//     const numArrayElement = numArray[j];
//     console.log(numArrayElement)
// }

// let i=0;
// while (i<numArray.length){
//     console.log(numArray[i])
//     i++
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let i=0;
// while (i<numArray.length){
//     if(i%2!==0){
//     console.log(numArray[i])
//             }
//     i++
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let item of numArray) {
//     if (item%3 === 0){
//         item = 'okten'
// }console.log(item)
//     }

// 8. вивести масив в зворотньому порядку.

for (let i = numArray.length - 1; i >= 0; i--) {
    console.log(numArray[i])
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)