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

let minArray = [45, 23, 56, 24, 45, 11];
function minNumber(array){
    let min = array[0];
    for (let number of array) {
        if(number < min){
            min = number
        }
    }return min
}
let result = minNumber(minArray);
console.log(result);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].