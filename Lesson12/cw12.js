// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку
//     виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');

        for (let elements of json) {
            let objectDiv = document.createElement('div');
            objectDiv.classList.add('post');

            let userIdDiv = document.createElement('div');
            userIdDiv.classList.add('elemUserId')
            userIdDiv.innerText = `${elements.userId}`;
            let idDiv = document.createElement('div');
            idDiv.classList.add('elemId')
            idDiv.innerText = `${elements.id}`;
            let titleDiv = document.createElement('p');
            titleDiv.classList.add('elemTitle')
            titleDiv.innerText = `${elements.title}`;
            let bodyDiv = document.createElement('p');
            bodyDiv.classList.add('elemBody')
            bodyDiv.innerText = `${elements.body}`;

            let btnDiv = document.createElement('div');
            btnDiv.classList.add('btn1')
            let btn = document.createElement('button');
            btn.innerText = 'Info here';
            btn.onclick = function (e){
                e.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/posts/' + elements.id + '/comments')
                    .then((someComment) => someComment.json())
                    .then((comments)=>{
                        for (let comment of comments) {
                            if(elements.id === comment.postId){

                            let commentBtnDiv = document.createElement('div');
                            commentBtnDiv.classList.add('comment');
                            let commentH2 = document.createElement('h2');
                            commentH2.innerText = `${comment.id}`;
                            let commentH3 = document.createElement('h3');
                            commentH3.innerText = `${comment.name}`;
                            let commentH4 = document.createElement('h4');
                            commentH4.innerText = `${comment.email}`;
                            let commentH5 = document.createElement('h5');
                            commentH5.innerText = `${comment.body}`

                            commentBtnDiv.append(commentH2, commentH3, commentH4, commentH5)
                            btnDiv.appendChild(commentBtnDiv);

                            }

                            btn.disabled = true;
                        }


                    })


            }


            btnDiv.appendChild(btn)
            objectDiv.append(userIdDiv, idDiv, titleDiv, bodyDiv, btnDiv)
            divContainer.appendChild(objectDiv)
        }

        document.body.appendChild(divContainer)
    })