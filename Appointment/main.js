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
    axios.post("https://crudcrud.com/api/51538406455b4ec5a27bad9aa578b566/user", obj).then((response)=>{
        console.log(response)}).catch((err)=>{console.log(err)})
    // localStorage.setItem(obj.mail, JSON.stringify(obj))
    showNewuseronScreen(obj);
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/51538406455b4ec5a27bad9aa578b566/user")
  .then((response)=>{
    console.log(response)
    for(var i=0;i<response.data.length;i++){
      showNewuseronScreen(response.data[i])}
  })
  .catch((err)=>{console.log(err)})
})
function showNewuseronScreen(user) {
    document.getElementById('mail').value = '';
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    // console.log(localStorage.getItem(user.emailId))
    if (localStorage.getItem(user.mail) !== null) {
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name}-${user.mail}-${user.number} 
    <button onclick=deleteUser('${user._id}')>delete</button>
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
function deleteUser(userId){
  console.log(userId)
  axios.delete(`https://crudcrud.com/api/51538406455b4ec5a27bad9aa578b566/user/${userId}`).then((response)=>{
        console.log(response)}).catch((err)=>{console.log(err)})
//   localStorage.removeItem(mail);
  removeUserFromScreen(userId)
}
function removeUserFromScreen(userId){
const parentNode = document.getElementById('listOfUsers');
const childNodeToBeDeleted = document.getElementById(userId);
if(childNodeToBeDeleted) {
parentNode.removeChild(childNodeToBeDeleted)
}
}