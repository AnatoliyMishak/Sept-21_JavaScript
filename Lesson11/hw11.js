// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form1 = document.forms.form1;
// form1.onsubmit = function (e){
//     e.preventDefault();
//     let name = form1.name.value;
//     let age = form1.age.value;
//     // console.log(name,age)
//     localStorage.setItem('userData', JSON.stringify({name, age}))
// }

//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let form2 = document.forms.form2;
// form2.onsubmit = function (e){
//     e.preventDefault();
//     let model = form2.model.value;
//     let type = form2.type.value;
//     let volume = form2.volume.value;
//     // console.log(model, type, volume)
//     let newCar = {model, type, volume};
//     let carArray = JSON.parse(localStorage.getItem('carArray')) || [];
//     carArray.push(newCar);
//     localStorage.setItem('carArray', JSON.stringify(carArray));
// }