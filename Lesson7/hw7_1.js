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

let clientArray = [
    new Client(11, 'valya11', 'Buch1',' valywa@sdf.com', 3821453, ['book1', 'book3']),
    new Client(12, 'valya12', 'Buch2',' valyae@sdf.com', 3824253, ['book1', 'book2', 'book3']),
    new Client(15, 'valya13', 'Buch3',' valyra@sdf.com', 3824533, ['book3']),
    new Client(17, 'valya14', 'Buch4',' valyta@sdf.com', 38245343, ['book1', 'book2', 'book3', 'book4']),
    new Client(13, 'valya15', 'Buch5',' valyya@sdf.com', 3824534, ['book1', 'book2', 'book3']),
    new Client(20, 'valya16', 'Buch6',' valyua@sdf.com', 3824535, ['book1', 'book2', 'book3']),
    new Client(19, 'valya17', 'Buch7',' valyia@sdf.com', 3824563, ['book1', 'book2', 'book3', 'book4', 'book5']),
    new Client(14, 'valya18', 'Buch8',' valyoa@sdf.com', 3824573, ['book1', 'book2', 'book3', 'book4']),
    new Client(18, 'valya19', 'Buch9',' valyka@sdf.com', 3824583, ['book1', 'book2']),
    new Client(16, 'valya20', 'Buch10',' valjya@sdf.com', 38249053, ['book1'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedArrayByOrder = clientArray.sort((a,b) => a.order.length - b.order.length)
console.log(sortedArrayByOrder)