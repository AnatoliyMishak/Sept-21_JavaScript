// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id,
    this.name = name,
        this.surname = surname,
        this.email = email,
    this.phone = phone
    }
let emptyArray = [
    new User(34, 'Gena', 'Bukin', 'gb@gmail.com', 380509875844),
    new User(24, 'Lena', 'Bukina', 'lb@gmail.com', 380509875855),
    new User(45, 'Misha', 'Baggins', 'mb@gmail.com', 380501239876),
    new User(2, 'Fedya', 'Superman', 'fs@gmail.com', 380503458283),
    new User(87, 'Sasha', 'Verik', 'sv@gmail.com', 380509563748),
    new User(93, 'Yura', 'Alikeev', 'ya@gmail.com', 380506482643),
    new User(23, 'Nina', 'Vovk', 'nv@gmail.com', 380503547823),
    new User(16, 'Natasha', 'Gertz', 'ng@gmail.com', 380505637482),
    new User(73, 'Ira', 'Merinova', 'im@gmail.com', 380502947364),
    new User(56, 'Grisha', 'Vartanov', 'gv@gmail.com', 380508374637),

]
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let idFilter = emptyArray.filter(value => value.id%2===0)
console.log(idFilter)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let idSort = emptyArray.sort((a,b) => a.id - b.id)
console.log(idSort)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone,
        this.order = order
    }
}

let emptyClientArray = [
    new Client(34, 'Gena', 'Bukin', 'gb@gmail.com', 380509875844, ['books', 'juice', 'bread']),
    new Client(24, 'Lena', 'Bukina', 'lb@gmail.com', 380509875855, ['candy', 'chocolate', 'mango', 'soap']),
    new Client(45, 'Misha', 'Baggins', 'mb@gmail.com', 380501239876, ['t-shirt', 'sweather']),
    new Client(2, 'Fedya', 'Superman', 'fs@gmail.com', 380503458283, ['komp', 'notebook', 'pendrive', 'memory stick', 'disc']),
    new Client(87, 'Sasha', 'Verik', 'sv@gmail.com', 380509563748, ['samsung']),
    new Client(93, 'Yura', 'Alikeev', 'ya@gmail.com', 380506482643, ['huawey', 'xiaomi', 'apple']),
    new Client(23, 'Nina', 'Vovk', 'nv@gmail.com', 380503547823, [4, 6, 7, 3, 8, 2, 5, 9]),
    new Client(16, 'Natasha', 'Gertz', 'ng@gmail.com', 380505637482, ['Lambo', 'Toyota', 'Skoda', 'VW', 'Ferrari']),
    new Client(73, 'Ira', 'Merinova', 'im@gmail.com', 380502947364, ['tv', 'Phone', 'Microwave', 'toaster']),
    new Client(56, 'Grisha', 'Vartanov', 'gv@gmail.com', 380508374637, ['katya', 'masha', 'ira', 'nastya'])
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClientArray = emptyClientArray.sort((a,b) => a.order.length - b.order.length)
console.log(sortedClientArray)