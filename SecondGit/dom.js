//getElementById

let headerTitle = document.getElementById('header-title')
headerTitle.style.borderBottom = 'solid 3px #000';
// var header = document.getElementById('main-header')
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>'

//getElementByClassname
var title = document.getElementsByClassName('title')
title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';

var items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

for(var i = 0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
