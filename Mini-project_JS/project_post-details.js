// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let postContainerDiv = document.getElementsByClassName('postContainer')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((userPost) => {
        let postDetails = JSON.parse(localStorage.getItem('postDetails'))

        for (let postItem of userPost) {
            if (postDetails === postItem.id) {
                let postDetailsDiv = document.createElement('div');
                postDetailsDiv.classList.add('postDetails')

                let postDetailsIdDiv = document.createElement('div');
                postDetailsIdDiv.classList.add('postDetailsId')
                postDetailsIdDiv.innerHTML = `<h2>ID: ${postItem.id}</h2>`

                let postDetailsTitleDiv = document.createElement('div');
                postDetailsTitleDiv.classList.add('postDetailsTitle')
                postDetailsTitleDiv.innerHTML = `<h2>${postItem.title}</h2>`

                let postDetailsBodyDiv = document.createElement('div');
                postDetailsBodyDiv.classList.add('postDetailsBody')
                postDetailsBodyDiv.innerText = `${postItem.body}`

                let commentsDiv = document.createElement('div');
                commentsDiv.classList.add('commentsDiv');

                fetch('https://jsonplaceholder.typicode.com/posts/' + postItem.id + '/comments')
                    .then((response) => response.json())
                    .then((comments) => {
                        for (let commentElement of comments) {
                            let commentElementDiv = document.createElement('div');
                            commentElementDiv.classList.add('commentElement')
                            commentElementDiv.innerText = `Comment: 
                                                            ${commentElement.body}`
                            commentsDiv.appendChild(commentElementDiv)
                        }
                    })

                postDetailsDiv.append(postDetailsIdDiv, postDetailsTitleDiv, postDetailsBodyDiv, commentsDiv)
                postContainerDiv.appendChild(postDetailsDiv)
            }
        }

    })