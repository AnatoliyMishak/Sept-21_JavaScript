// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNum (num1, num2, num3){
//     if(num1 < num2 && num1 < num3){
//         console.log(num1)
//     }else if (num2 < num1 && num2< num3) {
//         console.log(num2)
//     }else if(num3 < num1 && num3 < num2){
//         console.log(num3)
//     }else {'Числа не можуть бути рівними'}
// }
// minNum(24, 43, 11);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву

// let maxArray = [45, 23, 56, 24, 45, 11];
// function maxNumber(array){
//     let max = array[0];
//     for (let number of array) {
//         if(number > max){
//             max = number
//         }
//     }return max
// }
// let result = maxNumber(maxArray);
// console.log(result);

// - створити функцію яка повертає найменьше число з масиву

// let minArray = [45, 23, 56, 24, 45, 11];
// function minNumber(array){
//     let min = array[0];
//     for (let number of array) {
//         if(number < min){
//             min = number
//         }
//     }return min
// }
// let result = minNumber(minArray);
// console.log(result);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summArray = [45, 23, 56, 24, 45, 11];
// function summNumber(array){
//     let total = 0;
//     for (let number of array) {
//         total = total + number
//     }return total;
// }let result = summNumber(summArray);
// console.log(result)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let avrArray = [45, 23, 56, 24, 45, 11];
// function avrNum(array){
//     let average = 0;
//     for (let numbers of array) {
//         average = average + numbers/array.length
//     }return average;
// }
// let result = avrNum(avrArray);
// console.log(result);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let array = [22, 44, 55, 12, 65, 76, 45, 98];
// function showMinMax(arr) {
// let max = array[0];
// let min = array[0];
//     for (let number of arr) {
//         if (number > max) {
//             max = number;}
//         if (number < min) {
//             min = number; }
//         } console.log(max);
//         return min;
// }
// showMinMax(array)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function showRandomArray(arr){
//     for (let t = 0; t < 20; t++){
//         arr[t] = Math.round(Math.random()*100)
//     }return arr
// }
// console.log(showRandomArray([]))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function showRandomArray(arr, limit){
//     for (let t = 0; t < 100; t++){
//         arr[t] = Math.round(Math.random()*limit)
//     }return arr
// }
// console.log(showRandomArray([], 5000))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [2, 3, 4, 5];
// function showRevArray(arr){
//     let newArr = [];
//         for (let i = arr.length - 1, t=0; i >= 0; i--, t++) {
//         newArr[t] = arr[i];
//
//     }return newArr;
// }console.log(showRevArray(array))