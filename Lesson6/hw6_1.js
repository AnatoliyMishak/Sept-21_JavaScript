// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toUpperCase1 = str1.toUpperCase()
console.log(toUpperCase1)
let toLowerCase1 = toUpperCase1.toLocaleLowerCase()
console.log(toLowerCase1)

let toUpperCase2 = str2.toUpperCase()
console.log(toUpperCase2)
let toLowerCase2 = toUpperCase2.toLocaleLowerCase()
console.log(toLowerCase2)

let toUpperCase3 = str3.toUpperCase()
console.log(toUpperCase3)
let toLowerCase3 = toUpperCase3.toLocaleLowerCase()
console.log(toLowerCase3)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let strDirty = ' dirty string   '
console.log(strDirty.trim())

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let getArray = 'Каждый охотник желает знать';
let stringToarray = (getArray) =>{
    return getArray.split(' ')
}
console.log(stringToarray(getArray))

//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let getUnder = 'Каждый охотник желает знать';
let delete_characters = (getUnder, length) =>{
return getUnder.substr(7, 10)
}
console.log(delete_characters(getUnder))

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let showDash = "HTML JavaScript PHP";
let insert_dash = (showDash) => {
    return showDash.replaceAll(' ', '-').toUpperCase()
}
console.log(insert_dash(showDash))

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
let changeReg = (agr) =>{
    return agr[0].toUpperCase() + agr.slice(1)
};
console.log(changeReg('hello okten you are great'))


//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери

let capitalize = (sentence) =>{
return sentence.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
}
console.log(capitalize('hello okten you are great'))