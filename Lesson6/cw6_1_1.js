// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//==================Рішення нижче==========================

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// function validName(arg){
//    return  arg.replaceAll('..', ' ')
//        .replaceAll('---',' ')
//        .replaceAll('__', ' ')
// }
// console.log(validName(n3))

//===============================================

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arr = []
function randomArray(arr){
    for (let i = 0; i < 30; i++) {
    arr[i] = Math.round(Math.random()*100)
            }return arr
}
console.log(randomArray(arr))
//===============================================
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//==================Рішення нижче==========================

let sortArr = randomArray(arr).sort((a,b) => a-b);
console.log(sortArr)
//======================================================

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//==================Рішення нижче==========================

let filterArr = randomArray(arr).filter(value =>{
    if (value %2===0){
        return value
    }
})
console.log(filterArr)

//===========================================================
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//==================Рішення нижче==========================
let mapArray = randomArray(arr).map(item => {
    return item.toString()
})
console.log(mapArray)
//=========================================================

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//==================Рішення нижче==========================
//
let nums = randomArray(arr)
function sortNums(direction){
    if(direction === 'asc'){
        return nums.sort((a,b)=>a-b)
    } if (direction === 'desc'){
        return nums.sort((a,b) => b-a)
    }
}
console.log(sortNums('asc'))

//=========================================================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
//==================Рішення нижче==========================

let sort = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
console.log(sort)
//=========================================================
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//==================Рішення нижче==========================

let filter = coursesAndDurationArray.filter(value => {
    if(value.monthDuration > 5){
        return value
    }
})
console.log(filter)