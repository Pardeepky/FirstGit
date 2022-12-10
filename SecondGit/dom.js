//getElementById

// let headerTitle = document.getElementById('header-title')
// headerTitle.style.borderBottom = 'solid 3px #000';
// var header = document.getElementById('main-header')
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>'

//getElementByClassname
// var title = document.getElementsByClassName('title')
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';

// var items = document.getElementsByClassName('list-group-item');
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for(var i = 0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

//getElementByTagName

// var li = document.getElementsByTagName('li');
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';
// li[4].style.backgroundColor = 'red';

// for(var i = 0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

// query selector

var header = document.querySelector("#main-header");
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden' 

//querySelectorAll

var titles = document.querySelectorAll('.title');
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i< odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';
