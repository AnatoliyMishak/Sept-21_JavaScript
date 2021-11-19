// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function getMin(min1, min2, min3){
//     if (min1 < min2 && min1 < min3){
//     console.log(min1)
//             }
//     else if(min2 < min1 && min2 < min3){
//              console.log(min2)}
//     else if (min3 < min1 && min3 < min2){
//         console.log(min3)
//     }else {alert('Числа не можуть бути ріними')}
//
// }
// getMin(1000, 800, 500)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function getMax(max1, max2, max3){
//     if (max1 > max2 && max1 > max3){
//         console.log(max1)
//     }
//     else if(max2 > max1 && max2 > max3){
//         console.log(max2)}
//     else if (max3 > max1 && max3 > max2){
//         console.log(max3)
//     }else {alert('Числа не можуть бути ріними')}
//
// }
// getMax(1000, 800, 500)


// - створити функцію яка повертає найбільше число з масиву

// let maxArray= [4, 6, 7, 8, 9];
// function getMax(array){
//     let max = array[0];
//     for (const item of array) {
//         if (item > max){
//             max = item;
//         }
//     }
// return max;
// }
// let result = getMax(maxArray);
// console.log(result);

// - створити функцію яка повертає найменьше число з масиву

// let minArray= [4, 6, 7, 8, 9];
// function getMin (array){
//     let min = array[0];
//     for (const item of array) {
//         if (item < min){
//             min = item;
//         }
//     }
//     return min;
// }
// let result = getMin(minArray);
// console.log(result);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let calcArray = [22, 33, 44, 55, 66, 77];
// function summ (array){
// let total = 0;
//     for (const items of array) {
//         total = items + total;
//     }
//     return total;
// }
// let totalSumm = summ(calcArray);
// console.log(totalSumm)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let aveArray = [22, 33, 44, 55, 66, 77];
//
// function average(array) {
//     let ave = 0;
//     for (const items of array) {
//         ave = ave + items / aveArray.length;
//     }
//     return ave;
// }
//
// let aveResult = average(aveArray);
// console.log(aveResult);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function anyNumqty(numbers) {
//     let minNum = numbers[0];
//     let maxNum = numbers[0];
//     for (const items of numbers) {
//         if (items > maxNum) {
//             maxNum = items;
//         }
//         if (items < minNum) {
//             minNum = items;
//         }
//     } console.log(maxNum);
//     return minNum;
// }

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomArray(numbers, size){
//     for (let t=0; t < size; t++){
//         let random = numbers [t];
//         numbers = Math.round(Math.random()*100)
//     }return numbers;
// }

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomArrayLimit(numbers, size, limit){
//     for (let t=0; t < size; t++){
//         let random = numbers [t];
//         numbers = Math.round(Math.random() * limit)
//     }return numbers;
// }


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array = [2, 3, 4, 5, 6, 7, 8];
function showArray (arrayB){
    let reverseArray = [];
    for (let t = array.length - 1, ri = 0; t >= 0; t--, ri++) {
        reverseArray[ri] = array[t]
    } return reverseArray;
}
let result = showArray(array);
console.log(result);