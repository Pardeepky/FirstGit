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
    const childHTML = `<li id=${user.mail}> ${user.name}-${user.mail}-${user.number} </li>`
    parentNode.innerHTML += childHTML;
}