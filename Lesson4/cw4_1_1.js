// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function getMin(min1,min2,min3){
//     if(min1<min2 && min1<min3){
//         console.log(min1)
//     }else if(min2<min1 && min2<min3){
//         console.log(min2)
//     }else if(min3<min1 && min3<min2){
//         console.log(min3)
//     }else console.log('числа рівні')
// }
// getMin(3,3,3)

// - створити функцію яка повертає найбільше число з масиву

// let someArray = [66, 77, 33, 88, 22, 55, 100, 123, 222, 211];
// function maxNumOfArray(arr){
//         let max = arr[0]
//     for (let element of arr) {
//         if(element > max){
//             max = element
//          }
//         }return max
// }
// console.log(maxNumOfArray(someArray))

// - створити функцію яка повертає найменьше число з масиву

// function minNumOfArray(arr2){
//     let min = arr2[0];
//     for (let minEl of arr2) {
//         if(minEl < min){
//             min = minEl
//         }
//     }return min
// }
// console.log(minNumOfArray(someArray))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function summOfArray(arr3){
//     let res = 0;
//     for (let num of arr3) {
//         res += num
//     }return res
// }
// console.log(summOfArray(someArray))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function avgArray(arr4){
//     let avg = 0;
//     for (let item of arr4) {
//         avg = item + avg
//     }
//     return avg/arr4.length
// }
// console.log(avgArray(someArray))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function anyNums(arg){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let argElement of arguments) {
//         if (argElement < min) {
//             min = argElement
//         }
//         if (argElement > max) {
//             max = argElement
//         }
//     }
//     console.log(max)
//     return min;
// }
// document.write(anyNums(10,25,33,88,66,22,44,84))

// - створити функцію яка заповнює масив рандомними числами

// function randomArray(arr){
//     for (let i = 0; i < 30; i++) {
//          arr[i] = Math.round(Math.random()*100)
//     }return arr
// }
// console.log(randomArray([]))

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomArray(arr, limit){
//     for (let i = 0; i < 9; i++) {
//         arr[i] = Math.round(Math.random()*limit)
//     }return arr
// }
// console.log(randomArray([],10000))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array = [4,5,6,7,8,9]

//=========Variant 1================
// function reverseArray(arr){
//     let newArray = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
// newArray.push(arrElement)
//
//     }return newArray
// }
// console.log(reverseArray(array))

//=========Variant 2================
function reverse(arr){
    let newArray2 = []
    for (let i = arr.length - 1, ri=0; i >= 0; i--, ri++) {
        newArray2[ri] = arr[i]
    }return newArray2
}
console.log(reverse(array))