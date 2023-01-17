let lastActivity = new Date()
console.log("last activity before creating post " + lastActivity)


const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((arr) => {
            output += `<li>${arr.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)

}
function createPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);
            resolve(newPost)
        }, 1000)
    })
}

const user = { lastupdate: new Date().getSeconds() }
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        user.lastupdate = new Date().getTime();
        setTimeout(() => {
            resolve(user.lastupdate)
        }, 1000);
    })
}

// function printRecord(){
//     return new Promise((resolve,reject)=>{
//         resolve(posts)
//     })
// }


function updatePost() {
    Promise.all([createPost, updateLastUserActivityTime])
        .then(() => {
            console.log(`after creating post 4>>>`)
            console.log(posts)
            console.log(`User last activity time ${user.lastupdate}`)
        });
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(updatePost)

// createPost({title:'Post Four', body:'This is post Four'})
// .then(updatePost)
//.then(()=>{console.log(posts)}).then(()=>{console.log(posts)}).then(getPosts);
//.then(()=>{console.log(posts)}).then(deleteLastRecord).then(()=>{console.log(posts)}).then(getPosts);


// function deleteRecord(){
//     return new Promise((resolve,reject)=>{
//        getPosts();
//        setTimeout(()=>{
//         //calling delete record again i posts[] is not empty
//         if(posts.length!==0){
//          resolve();
//         }
//         else {
//          reject ( console.log('array is empty now'));
//          }
//        //deleting the last post
//        posts.pop(posts.length-1);
//        },1000)
//     })
//  }


//  function deleteLastRecord(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.pop(posts.length-1);
//             resolve(posts)
//         },1000)
//     })
//  }