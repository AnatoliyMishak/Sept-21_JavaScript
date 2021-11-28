//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let changeFn = (numb) => {
    return numb.replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
}
console.log(changeFn(n3))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArray = (arr, size) =>{
    for (let i = 0; i < size; i++) {
arr[i] = Math.round(Math.random() * 100)
    }
    return arr
}
console.log(randomArray([], 10))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let randArr1 = randomArray([], 20)
let sort = randArr1.sort((a,b) => a-b );
console.log(sort)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randArr2 = randomArray([], 20)
let filter = randArr2.filter(value => value%2===0);
console.log(filter)


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let randArr3 = randomArray([], 20)
let map = randArr3.map(value => value.toString());
console.log(map)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

let nums = [56, 12, 34, 7, 23, 98, 1];
let sortNums = (direction) =>{
    if (direction === 'asc')
        return nums.sort((a,b) => a-b)
else if (direction === 'desc')
    return nums.sort ((a,b) => b-a)
else return 0
}
console.log(sortNums('desc'))


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortMonthDuration = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
console.log(sortMonthDuration)

let overFiveMonth = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(overFiveMonth)