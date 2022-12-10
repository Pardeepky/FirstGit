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

// var header = document.querySelector("#main-header");
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden' 

//querySelectorAll

// var titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i< odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// var items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'green';

// Travesing the DOM

var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

// //firstChild
// console.log(itemList.firstChild);
// //first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//firstChild
// console.log(itemList.lastChild);
//first element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibbling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibbling

// console.log(itemList.previousSibling);
// //previousElementSibbling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'

//createElement

//create a div

var newDiv = document.createElement('div');
var newDiv2 = document.createElement('div');

// add class
newDiv.className = 'hello';
newDiv2.className = 'hello';

//add id
newDiv.id = 'hello1';
newDiv2.id = 'hello2';

//add attribute
newDiv.setAttribute('title', 'Hello Div');
newDiv2.setAttribute('title', 'Hello Div2');

//create text node
var newDivText = document.createTextNode('Hello World')
var newDivText2 = document.createTextNode('Hello World')

//Add text to div
newDiv.appendChild(newDivText);
newDiv2.appendChild(newDivText2);

var container = document.querySelector('div #main');
var h1 = document.querySelector('div h2');

var item1 = document.querySelector('div .list-group');
var li = document.querySelector('div li');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
item1.insertBefore(newDiv2, li)