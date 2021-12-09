// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function car(producer, year, maxSpeed, engine){
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function (){
        console.log(`producer - ${this.producer} year - ${this.year} maxSpeed - ${this.maxSpeed} engine - ${this.engine}`)
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed
    }
    this.changeYear = function (newValue){
        this.year = newValue
    }
    this.addDriver = function (driver){
        this.driver = driver
    }

}
let cars = new car('Kia', 2021, 230, 2)
console.log(cars)
cars.addDriver('tolik');
cars.changeYear(2022);
cars.increaseMaxSpeed(300)
cars.info();
cars.drive();

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
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name, age, foot){
    this.name = name;
    this.age = age;
    this.foot = foot;
}

let cinderellaArray = [
    new Cinderella('valya', 22, 35),
    new Cinderella('katya', 23, 36),
    new Cinderella('masha', 21, 34),
    new Cinderella('yana', 20, 37),
    new Cinderella('regina', 18, 33),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince1 = new Prince('grisha', 35, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let couple = function (cindi, princ) {
    for (let cinderella of cinderellaArray) {
    if(cinderella.foot === princ.shoe){
        return `your destiny - ${cinderella.name}`;
    }
}

}
console.log(couple(cinderellaArray, prince1))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку