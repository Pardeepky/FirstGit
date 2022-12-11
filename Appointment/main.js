function register(event) {
    event.preventDefault();
    const name = event.target.name.value
    const mail = event.target.mail.value
    const number = event.target.number.value
    const obj = {
        name,
        mail,
        number
    }
    localStorage.setItem(obj.mail, JSON.stringify(obj))
    showNewuseronScreen(obj);
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageobj = localStorage;
    const localStoragekeys = Object.keys(localStorageobj)
    for (var i = 0; i < localStoragekeys.length; i++) {
        const key = localStoragekeys[i]
        const userDetailsString = localStorageobj[key];
        const userDetailsObj = JSON.parse(userDetailsString)
        showNewuseronScreen(userDetailsObj)
    }
})
function showNewuseronScreen(user) {
    document.getElementById('mail').value = '';
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    // console.log(localStorage.getItem(user.emailId))
    if (localStorage.getItem(user.mail) !== null) {
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.mail}> ${user.name}-${user.mail}-${user.number} 
    <button onclick=deleteUser('${user.mail}')>delete</button>
    <button onclick=editUserDetails('${user.name}','${user.mail}','${user.number}')>edit</button>
    </li>`
    parentNode.innerHTML += childHTML;
}

function editUserDetails(name,mail,number)
{
  document.getElementById('name').value=name
  document.getElementById('mail').value=mail
  document.getElementById('number').value=number
  deleteUser(mail)
}
function deleteUser(mail){
  console.log(mail)
  localStorage.removeItem(mail);
  removeUserFromScreen(mail)
}
function removeUserFromScreen(mail){
const parentNode = document.getElementById('listOfUsers');
const childNodeToBeDeleted = document.getElementById(mail);
if(childNodeToBeDeleted) {
parentNode.removeChild(childNodeToBeDeleted)
}
}