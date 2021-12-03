// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let getBlock = document.createElement('div');
getBlock.innerText = 'Privet, menya zovut E-Type. Na zdorovye!!!!!'
getBlock.style.background = 'silver'
getBlock.style.color = 'gold'
getBlock.style.fontSize = '40px'
document.body.appendChild(getBlock);
getBlock.classList.add('wrap', 'collapse', 'alpha', 'beta')
let getBlockClone = getBlock.cloneNode(true);
document.body.appendChild(getBlockClone)
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let addArray = ['Main','Products','About us','Contacts']
for (let item of addArray) {
    let menuLi = document.createElement('li')
    menuLi.innerText =`${item}`;
    let elementsByClassName = document.getElementsByClassName('menu')[0];
    elementsByClassName.appendChild(menuLi)
}


//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let course of coursesAndDurationArray) {
    let createBlock = document.createElement('div')
    createBlock.innerText = `${course.title}  ${course.monthDuration}`;
    document.body.appendChild(createBlock)
}


//
// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let element of coursesAndDurationArray1) {
    let createDiv = document.createElement('div')
    createDiv.classList.add('item')
    let createH1 = document.createElement('h1')
    createH1.classList.add('heading')
    createH1.innerText = `${element.title}`
    let createP = document.createElement('p')
    createP.classList.add('description')
    createP.innerText = `${element.monthDuration}`

    createDiv.appendChild(createH1)
    createDiv.appendChild(createP)
    document.body.appendChild(createDiv)
}