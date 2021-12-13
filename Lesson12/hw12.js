// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) =>{
//     let divContainer = document.createElement('div');
//     divContainer.classList.add('container');
//
//         for (let elements of json) {
// let objectDiv = document.createElement('div');
// objectDiv.classList.add('post');
//
//             let userIdDiv = document.createElement('div');
//                 userIdDiv.classList.add('elemUserId')
//                 userIdDiv.innerText = `${elements.userId}`;
//             let idDiv = document.createElement('div');
//                 idDiv.classList.add('elemId')
//                 idDiv.innerText =`${elements.id}`;
//             let titleDiv = document.createElement('p');
//                 titleDiv.classList.add('elemTitle')
//                 titleDiv.innerText = `${elements.title}`;
//             let bodyDiv = document.createElement('p');
//                 bodyDiv.classList.add('elemBody')
//                 bodyDiv.innerText = `${elements.body}`;
//
//
//             objectDiv.append(userIdDiv, idDiv, titleDiv, bodyDiv)
//         divContainer.appendChild(objectDiv)
//         }
//
//     document.body.appendChild(divContainer)
//     })

//
//     2.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((comments) => {
let containerDiv = document.createElement('div');
containerDiv.classList.add('target')

        for (let comment of comments) {
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('xxx');

            let idDiv = document.createElement('div');
            idDiv.classList.add('yyy')
            idDiv.innerText = `${comment.id}`;

            let nameH2 = document.createElement('h2');
            nameH2.innerText = `${comment.name}`;

            let emailH3 = document.createElement('h3');
            emailH3.innerText = `${comment.email}`;

            let bodyP = document.createElement('p');
            bodyP.innerText = `${comment.body}`;


            mainDiv.append(idDiv, nameH2, emailH3, bodyP)
            containerDiv.appendChild(mainDiv)
        }

document.body.appendChild(containerDiv)
    });