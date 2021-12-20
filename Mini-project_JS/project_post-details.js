// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let postContainerDiv = document.getElementsByClassName('postContainer')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((userPost) =>{
        let postDetails = JSON.parse(localStorage.getItem('postDetails'))

        for (let postItem of userPost) {
            if(postDetails === postItem.id){
                let postDetailsDiv = document.createElement('div');
                postDetailsDiv.innerText = `${postItem.body}`
                postContainerDiv.appendChild(postDetailsDiv)
            }
        }

    })