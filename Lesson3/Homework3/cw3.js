// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 2. перебрати його циклом for та в зворотньому порядку

// for (let t = 0; t< array.length; t++){
//     document.write(`<div>${array[t]}</div>`)
// }

// for (let t = array.length-1; t>= 0; t--){
//     document.write(`<div>${array[t]}</div>`)
// }

// 1. перебрати його циклом while та в зворотньому порядку

// let t=0;
// while (t<array.length){
//     console.log(array[t]);
//         t++
// }

// let t=array.length-1;
// while (t>=0){
//     console.log(array[t]);
//     t--
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом та в зворотньому порядку

// let t=0;
// while (t<array.length){
//     if (t%2!==0){
//     console.log(array[t]);}
//         t++
// }

// let t=array.length-1;
// while (t>=0){
//     if (t%2!==0){
//         console.log(array[t]);}
//     t--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом та в зворотньому порядку

// for (let t=0; t<array.length; t++){
//     if(t%2!==0){
//         console.log(array[t])
//     }
// }

// for (let t=array.length-1; t>=0; t--){
//     if (t%2!==0){
//         console.log(array[t])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення та в зворотньому порядку

// let t=0;
// while (t<array.length){
//     if (array[t]%2===0){
//     console.log(array[t]);}
//         t++
// }

// let t=array.length-1;
// while (t>=0){
//     if (array[t]%2===0){
//         console.log(array[t]);}
//     t--
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення та в зворотньому порядку

// for(let t=0; t<array.length; t++){
//     if (array[t]%2===0){
//         console.log(array[t])
//     }
// }
//
// for(let t=array.length-1; t>=0; t--){
//     if (array[t]%2===0){
//         console.log(array[t])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten" та в зворотньому порядку

// for (let t=0; t<array.length; t++){
//     if (array[t]%3===0){
//         array[t] ='okten'
//     }
//     console.log(array[t])
// }

// for (let t=array.length-1; t>=0; t--){
//     if (array[t]%3===0){
//         array[t] ='okten'
//     }
//     console.log(array[t])
// }

// 8. вивести масив в зворотньому порядку.

for (let t = array.length-1; t>=0; t--) {
console.log(array[t])
}