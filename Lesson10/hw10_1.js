// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
//

// let btn1 = document.getElementById('btn1');
// btn1.onclick = function (e) {
//     e.preventDefault();
//     let textElement = document.getElementById('text');
//     textElement.style.display = 'none'
// }


//===================================================================================
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//

// let btn1 = document.getElementById('btn1');
// btn1.onclick = function (e) {
//     e.preventDefault();
//       btn1.style.display = 'none'
// }

//====================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let btn2 = document.getElementById('btn2');
// btn2.onclick = function (e){
//     e.preventDefault();
//     let value = document.getElementById('age').value;
//     if(value < 18){
//         alert('Cartoons is your choise')
//     }else {
//         alert('Welcome')
//     }
// }


//===================================================================================
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function (){
// this.classList.toggle('hide')
// }



//====================================================================================
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti'}
]

for (let comment of comments) {
    let commentsDiv = document.createElement('div');
    let titleElement = document.createElement('h2');
    titleElement.innerText = comment.title;
    let bodyElement = document.createElement('div');
    bodyElement.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'click me'
    btn.onclick = function () {
        bodyElement.classList.toggle('hidden')
    }


commentsDiv.append(titleElement, bodyElement, btn)
    document.body.appendChild(commentsDiv)
}