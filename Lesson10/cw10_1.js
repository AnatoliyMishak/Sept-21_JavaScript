// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let btn1 = document.getElementById('btn1');
// btn1.onclick = function (){
// let form11 = document.forms.form1.input1.value;
// let form12 = document.forms.form1.input2.value;
// let form21 = document.forms.form2.input3.value;
// let form22 = document.forms.form2.input4.value;
//     console.log(form21, form22, form11, form12)
// }

//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

let tabCreator = document.forms.tabCreator;
tabCreator.onsubmit = function (e){
    e.preventDefault();
let rows = +tabCreator.rows.value;
let cells = +tabCreator.cells.value;
let content = tabCreator.content.value;
console.log(rows, cells, content);

let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

document.body.appendChild(table)

}
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


let badWordsArray = ['паскуда', 'гута', 'європеєць']
let btn4 = document.getElementById('btn4');
btn4.onclick = function (){
    let badWord = document.getElementById('bad').value;
    for (let word of badWordsArray) {
        if (badWord === word){
            alert('Ах ти шалунішка!!!!')
        }
    }
}

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWordsArray = ['паскуда', 'гута', 'європеєць']
// let btn4 = document.getElementById('btn4');
// btn4.onclick = function (){
//     let badWord = document.getElementById('bad').value;
//     for (let word of badWordsArray) {
//         if (badWord.includes(word)) {
//             alert('Ах ти шалунішка!!!!')
//         }
//     }
// }