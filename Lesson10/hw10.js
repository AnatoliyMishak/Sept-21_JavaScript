// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//===========Вирішення нижче===========

// let hideText = document.getElementById('goal');
// hideText.onclick = function (){
//     document.getElementById('text').style.display = 'none'
// }
//========================================
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//===========Вирішення нижче===========
//
// let hideText = document.getElementById('goal');
// hideText.onclick = function (){
//     this.style.display = 'none'
// }
//============================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//===========Вирішення нижче===========

// let confAge = document.getElementById('checkAge')
// confAge.onclick = function (e){
//     e.preventDefault()
//     let someAge = document.getElementById('someAge').value;
//     if(+someAge >= 18){
//         alert('Hello dear visitor')
//     }else {
//         alert('Cannot log the page due to your age')
//     }
// }

//===============================================================
// - Создайте меню, которое раскрывается/сворачивается при клике
//===========Вирішення нижче===========
//
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function (){
//     this.classList.toggle('tobehide')
// }
//==============================================
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//===========Вирішення нижче===========

let comments = [
    {title: 'topic1', body: 'tell me about yousself'},
    {title: 'topic2', body: 'tell me about your wife'},
    {title: 'topic3', body: 'tell me about your dog'},
    {title: 'topic4', body: 'tell me about your kids'}
]
for (let comment of comments) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('mainComment');
    let titleH2 = document.createElement('h2');
    titleH2.innerText = comment.title;
    let bodyP = document.createElement('p');
    bodyP.innerText = comment.body
    let btn = document.createElement('button');
    btn.innerText = 'hide';

    btn.onclick =  function (){
        // bodyP.style.display = 'none'
        bodyP.classList.toggle('hidden')
    }

    mainDiv.append(titleH2, bodyP, btn)
    document.body.appendChild(mainDiv);
}
//=======================================================