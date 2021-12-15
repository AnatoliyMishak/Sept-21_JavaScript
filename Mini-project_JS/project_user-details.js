
let userInfo = JSON.parse(localStorage.getItem('userInfo'))
for (let userInfoElement of userInfo) {
    let userInfoDiv = document.createElement('div');
    userInfoDiv.innerText = `${userInfoElement.id} ${userInfoElement.name}`
    document.body.appendChild(userInfoDiv)
}