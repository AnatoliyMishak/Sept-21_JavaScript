// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку ,
// при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


let usersDiv = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        for (let userElement of json) {

        let userIdDIv = document.createElement('div');
        userIdDIv.classList.add('userId')
            userIdDIv.innerHTML = `<h3>ID: ${userElement.id}</h3>
                                   <h4>${userElement.name}</h4>`
        let userBtn = document.createElement('button');
        userBtn.classList.add('userBtnClass');
        userBtn.innerHTML = '<a href="user-details.html" target="_blank">User details</a>'
            userBtn.onclick = function (e){
            e.preventDefault();
                localStorage.setItem('userInfo', JSON.stringify(userElement.id));
                window.location.href = 'user-details.html'
            }

            userIdDIv.appendChild(userBtn)
            usersDiv.appendChild(userIdDIv)

        }

    });




//
//

//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)