// На странице user-details.html:
// // 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// // 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// // которая имеет детальную информацию про текущий пост.

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {

let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        for (let jsonElement of json) {
            if(userInfo === jsonElement.id){
                let detailsDiv = document.createElement('div');
                // console.log(jsonElement)
                detailsDiv.innerText = jsonElement.address.city
                document.body.appendChild(detailsDiv)
            }
        }

    });
