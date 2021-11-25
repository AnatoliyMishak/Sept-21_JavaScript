// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length);

let str1 = 'lorem ipsum';
console.log(str1.length);

let str2 = 'javascript is cool';
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toUpperCase = str.toUpperCase();
console.log(toUpperCase);
let toLowerCase = toUpperCase.toLowerCase();
console.log(toLowerCase);

let toUpperCase1 = str1.toUpperCase();
console.log(toUpperCase1);
let toLowerCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase1);

let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase2);
let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let dirty = ' dirty string   ';
let string = dirty.trim();
console.log(string);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//

let changeStr = 'Шоб я так жил';
let stringToArray = (changeStr) => {
return changeStr.split(' ');
        }
console.log(stringToArray(changeStr));


//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let returnStr = 'Шоб ти жил на одну зарплату';
let delete_characters = (returnStr, length) =>{
    return returnStr.substr(0, 10)
}
console.log(delete_characters(returnStr,length))

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// replace

let changeDash = "HTML JavaScript PHP";
let insert_dash = (changeDash) =>{
    return changeDash.replaceAll(' ', '-').toUpperCase()
}
console.log(insert_dash(changeDash))

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//str[0].split(). str.toUppercase()

let row = (someRow) => {
    return someRow[0].toUpperCase() + someRow.slice(1)
}
console.log(row('how are you?'))
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (someText) => {
    return someText.split(' ').map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(' ');
}
console.log(capitalize('let me speak from my heart'))