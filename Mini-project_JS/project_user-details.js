// На странице user-details.html:
// // 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// // 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// // которая имеет детальную информацию про текущий пост.

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let userContainerDiv = document.getElementsByClassName('userContainer')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {

        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        for (let jsonElement of json) {
            if (userInfo === jsonElement.id) {
                let userIdDiv = document.createElement('div');
                userIdDiv.classList.add('userId')
                // console.log(jsonElement)
                userIdDiv.innerHTML = `<h2>ID: ${jsonElement.id}</h2>
                                       <h2>${jsonElement.name}</h2> 
                                       <h2>Username: ${jsonElement.username}</h2>
                                       <h2>${jsonElement.email}</h2>`;
                let userAddressDiv = document.createElement('div');
                userAddressDiv.classList.add('userAddress')

                let userAddressList = document.createElement('ul');
                userAddressList.classList.add('userAddressList')
                userAddressList.innerText = 'User address:'

                for (let key in jsonElement.address) {
                    if (typeof jsonElement.address[key] === 'string' && jsonElement.address[key] !== jsonElement.address.geo) {
                        let addressList = document.createElement('li');
                        addressList.innerText = `${key} : ${jsonElement.address[key]}`
                        userAddressList.appendChild(addressList)

                    } else if (jsonElement.address[key] === jsonElement.address.geo) {
                        let geoDiv = document.createElement('div');
                        geoDiv.classList.add('geoDiv')
                        let geoUl = document.createElement('ul');
                        geoUl.classList.add('geoUl')
                        geoUl.innerText = 'GeoLocation:'

                        for (let geoKey in jsonElement.address.geo) {
                            let geoList = document.createElement('li');
                            geoList.innerText = `${geoKey} : ${jsonElement.address.geo[geoKey]}`

                            geoUl.appendChild(geoList)

                        }

                        geoDiv.appendChild(geoUl)
                        userAddressList.appendChild(geoDiv)
                    }
                }
                let phoneDiv = document.createElement('div');
                phoneDiv.classList.add('phoneDiv')
                phoneDiv.innerHTML = `<h2>Phone N: ${jsonElement.phone}</h2>
                                      <h2>Website: ${jsonElement.website}</h2>`

                let companyDiv = document.createElement('div');
                companyDiv.classList.add('companyDiv')
                let companyUl = document.createElement('ul');
                companyUl.classList.add('companyUl')
                companyUl.innerText = 'Company info:'

                for (let companyKey in jsonElement.company) {
                    let companyInfoList = document.createElement('li');
                    companyInfoList.innerText = `${companyKey} : ${jsonElement.company[companyKey]}`

                    companyUl.appendChild(companyInfoList)
                }
                let userInfoBtnDiv = document.createElement('div');
                userInfoBtnDiv.classList.add('userInfoBtnDiv')
                let userInfoBtn = document.createElement('button');
                userInfoBtn.classList.add('userInfoBtn')
                userInfoBtn.innerText = 'Post of current user'

                userInfoBtn.onclick = function (e) {
                    e.preventDefault();
                    fetch('https://jsonplaceholder.typicode.com/users/' + jsonElement.id +'/posts')
                        .then((response) => response.json())
                        .then((posts) => {
                            for (let postElement of posts) {
                                let htmlDivElement = document.createElement('div');
                                htmlDivElement.classList.add('htmlDivElement')
                                let postsDiv = document.createElement('div');
                                postsDiv.classList.add('postsDiv')
                                postsDiv.innerText = `${postElement.title}`
                                let postDetailsBtn = document.createElement('button');
                                postDetailsBtn.classList.add('postDetailsBtn')
                                postDetailsBtn.innerHTML = '<a href="post-details.html">Post details</a> '
                                postDetailsBtn.onclick = function (e){
                                    e.preventDefault();
                                    localStorage.setItem('postDetails', JSON.stringify(postElement.id));
                                    window.location.href = 'post-details.html'
                                }

                                htmlDivElement.append(postsDiv, postDetailsBtn)
                                // userInfoBtnDiv.append(postsDiv, postDetailsBtn)
                                userInfoBtnDiv.append(htmlDivElement)
                                userInfoBtn.disabled = true;
                                userInfoBtn.style.display = 'none'
                            }
                        })
                }

                // userInfoBtnDiv.appendChild(userInfoBtn)
                companyDiv.appendChild(companyUl)
                userAddressDiv.appendChild(userAddressList)
                userContainerDiv.append(userIdDiv, userAddressDiv, phoneDiv, companyDiv, userInfoBtnDiv, userInfoBtn)
            }
        }

    });
