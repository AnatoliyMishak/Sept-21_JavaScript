// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function car(model, origin, year, maxSpeed, engSize) {
    this.model = model,
        this.origin = origin,
        this.year = year,
        this.maxSpeed = maxSpeed,
        this.engSize = engSize,
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`)
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let cars = new car('Kia_Sportage', 'Korea', 2021, 220, 2.0 )
console.log(cars)


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class carClass{
    constructor(model, origin, year, maxSpeed, engSize) {
        this.model = model,
            this.origin = origin,
            this.year = year,
            this.maxSpeed = maxSpeed,
            this.engSize = engSize
    }
    drive() {
                console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
            }
            info() {
                for (let key in this) {
                    console.log(`${key} - ${this[key]}`)
                }
            }
            increaseMaxSpeed (newSpeed) {
                this.maxspeed = this.maxspeed + newSpeed;
            }
            changeYear (newValue) {
                this.year = newValue;
            }
            addDriver (driver) {
                this.driver = driver;
            }
}
let carClass2 = new carClass('Toyota', 'Japan', 2014, 260, 2.5 )
console.log(carClass2)


//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function cynderella (name, age, footsize){
    this.name = name,
        this.age = age,
        this.footsize = footsize
}

let cynderellaArray=[
    new cynderella('Valya', 36, 37),
    new cynderella('Katya', 39, 34),
    new cynderella('Masha', 24, 33),
    new cynderella('Regina', 10, 35),
    new cynderella('Sveta', 67, 39),
    new cynderella('Lyuba', 62, 38),
    new cynderella('Dasha', 19, 40),
    new cynderella('Yana', 28, 39),
    new cynderella('Kristina', 30, 32),
    new cynderella('Valery', 7, 31),
]
console.log(cynderellaArray)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class prince{
    constructor(name, age, highhillssize) {
        this.name = name,
            this.age = age,
            this.highhillssize = highhillssize
    }
}
let prince1 = new prince('tolik', 37, 37)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let couple = (cynderella, prince1) =>{
    for (let item of cynderellaArray) {
        if(item.footsize === prince1.highhillssize){
            return `Your couple - ${item.name}`;
             }
    else return 'your couple is Vasya'
    }
}
console.log(couple(cynderella(), prince1))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let findCynderella = cynderellaArray.find(item => item.footsize === prince1.highhillssize)
console.log(findCynderella)