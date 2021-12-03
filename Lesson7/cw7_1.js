// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//
// function Cars(model, producer, year, maxSpeed, engine){
//     this.model = model
//     this.producer = producer,
//         this.year = year,
//         this.maxSpeed = maxSpeed,
//         this.engine = engine,
//         this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function (){
//         console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${maxSpeed}, engine - ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue
//     }
//     this.addDriver = function (driver){
//         this.drive = driver
//     }
// }
// let addCars = new Cars('kia', 'Korea', 2021, 220, 2.0)
// console.log(addCars)
// addCars.drive()
// addCars.info()
// addCars.increaseMaxSpeed(50)
// addCars.changeYear(2022)
// addCars.addDriver('Tolik')
// console.log(addCars)


//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

// class Cars2{
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engine = engine
//     }
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info (){
//         console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${maxSpeed}, engine - ${this.engine}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     changeYear (newValue){
//         this.year = newValue
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cynderella (name, age, foot){
    this.name = name,
    this.age = age,
    this.foot = foot
}

let cynderellaArray=[
    new Cynderella('katya', 19, 34),
    new Cynderella('olya', 21, 33),
    new Cynderella('yana', 18, 35),
    new Cynderella('lesya', 22, 40)

];
console.log(cynderellaArray)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class prince{
    constructor(name, age, size) {
        this.name = name,
            this.age = age,
            this.size = size
    }
}
let prince1 = new prince('grisha', 29, 35)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let couple = (cynderellaArray, prince1) => {
    for (const cynderellaArrayElement of cynderellaArray) {
        if(cynderellaArrayElement.foot === prince1.size){
            return `your lady - ${cynderellaArrayElement.name}`
        }else return `Your lady - Sasha`
    }
};
console.log(couple(cynderellaArray, prince1));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cynca = cynderellaArray.find(value => value.foot === prince1.size)
console.log(cynca)