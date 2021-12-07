//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//===============Вирішення нижче=========================
// let elementById = document.getElementById('btn');
// elementById.onclick = function (){
// let input11 = document.forms.form1.form11.value;
// let input12 = document.forms.form1.form12.value;
// let input21 = document.forms.form2.form21.value;
// let input22 = document.forms.form2.form22.value;
// console.log(input11, input11, input21, input22)
// }

//
//=============================================================================
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//===============Вирішення нижче=========================
//
let form = document.forms.justForm;
form.onsubmit = function (e){
    e.preventDefault();
let rows = +form.rows.value;
let columns = +form.columns.value;
let content = form.content.value;
console.log(rows, columns, content);

let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

document.body.appendChild(table)
}


//===========================================================
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//===============Вирішення нижче=========================

// let badWords = ['гута', 'шаркань', 'легінь'];
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     let badWord = document.getElementById('badwords').value;
//     for (let words of badWords) {
//         if(words === badWord){
//             alert('ах ти ж закарпатська свиня!!!!')
//         }
//     }
// }
//======================================================
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//===============Вирішення нижче=========================

// let badWords = ['гута', 'шаркань', 'легінь'];
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     let badWord = document.getElementById('badwords').value;
//     for (let words of badWords) {
//         if(badWord.includes(words)){
//             alert('ах ти ж закарпатська свиня!!!!')
//         }
//     }
// }