// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'hello world';
// console.log(str1.length);
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1)
// let toLowerCase1 = toUpperCase1.toLowerCase();
// console.log(toLowerCase1);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
// let toLowerCase2 = toUpperCase2.toLowerCase();
// console.log(toLowerCase2);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3)
// let toLowerCase3 = toUpperCase3.toLowerCase();
// console.log(toLowerCase3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim)

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     return str.split(' ')
// }
// console.log(stringToarray(str))

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//==================Рішення нижче==========================

// let str = 'Каждый охотник желает знать';
// function delete_characters(str){
//     return str.substr(0,7)
// }
// console.log(delete_characters(str))
//===========================================

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//==================Рішення нижче==========================

// let str = "HTML JavaScript PHP";
// function insert_dash(str){
//     return str.replaceAll(' ', '-').toUpperCase(str)
// }
// console.log(insert_dash(str))


//=====================================================
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//==================Рішення нижче==========================
//
// let str = 'каждый охотник желает знать'
// function getCapLetters(str){
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(getCapLetters(str))

//=========================================================

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//==================Рішення нижче==========================

// let str = 'каждый охотник желает знать';
// function getFirstCapLetter(str){
//     return str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ')
// }
// console.log(getFirstCapLetter(str))