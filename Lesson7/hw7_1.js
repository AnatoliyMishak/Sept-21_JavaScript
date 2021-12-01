// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone){
this.id = id,
this.name = name,
this.surname = surname,
    this.email = email,
    this.phone = phone;

    };

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray= [
    new User(1, 'vasya1', 'qwerty1', 'ldsfdjf@gmail.com', '234023492309'),
    new User(2, 'vasya2', 'qwerty2', 'lksdsdfgjf@gmail.com', '235674092309'),
    new User(3, 'vasya3', 'qwerty3', 'lksdjf@ghvhmail.com', '23124092309'),
    new User(4, 'vasya4', 'qwerty4', 'lksdjf@gmaixcvl.com', '23409552309'),
    new User(5, 'vasya5', 'qwerty5', 'lksdryrtjf@gmail.com', '23407792309'),
    new User(6, 'vasya6', 'qwerty6', 'lksdjbmbmf@gmail.com', '23433092309'),
    new User(7, 'vasya7', 'qwerty7', 'lksdqwjf@gmail.com', '23409230999'),
    new User(8, 'vasya8', 'qwerty8', 'lksdjnmfgjf@gmail.com', '23411092309'),
    new User(9, 'vasya9', 'qwerty9', 'lksdjf@gmaiipl.com', '23400092309'),
    new User(10, 'vasya10', 'qwerty10', 'lksdjf@gdfjmail.com', '23422092309'),

]
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let fiterArrayById = userArray.filter(value => value.id%2 === 0)
    console.log(fiterArrayById)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArrayById = userArray.sort((a,b) => b.id - a.id)
console.log(sortArrayById)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id,
            this.name = name,
            this.surname = surname,
            this.email = email,
            this.phone = phone,
            this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)