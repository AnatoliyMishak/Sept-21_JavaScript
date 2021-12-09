// - Створити функцію конструктор для об'єктів User
// з полями id, name, surname , email, phone

function User (id, name, surname, email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray = [
new User(1, 'vasya1', 'pupit', 'asdsdfqwe@gmail.com', 8237654485),
new User(3, 'vasya2', 'pupik', 'asdqwwere@gmail.com', 8234432485),
new User(5, 'vasya3', 'pupin', 'asdqwdfe@gmail.com', 8234488725),
new User(2, 'vasya4', 'pupir', 'asdqavgwe@gmail.com', 8234485137),
new User(4, 'vasya5', 'pupis', 'asdqwyle@gmail.com', 8234487905)
];

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = userArray.filter(value => {
    if(value.id %2===0){
        return value
    }
})
console.log(filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = userArray.sort((a,b) => {
    return a.id - b.id
})
console.log(sort)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

class Client {
        constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let clientArray = [
    new Client(1, 'valya2', 'mishak9', 'mvsdf1@ukr.net', 2349845, ['book', 'work','food', 'root']),
    new Client(5, 'valya3', 'mishak8', 'mvee1@ukr.net', 234953453845, ['book']),
    new Client(3, 'valya4', 'mishak7', 'mv1rr@ukr.net', 234945, ['book', 'work','food']),
    new Client(3, 'valya5', 'mishak6', 'mv1yy@ukr.net', 234345953845, ['book', 'work','food', 'home']),
    new Client(4, 'valya6', 'mishak5', 'mv1ui@ukr.net', 23495376845, ['book', 'work','food', 'ring', 'nice', 'wife'])
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = clientArray.sort((a,b) => {
    return a.order.length - b.order.length
})
console.log(sortClient)