const posts = [{ title: "post 1", body: "this is post 1" },
{ title: "post 2", body: "this is post 2" }]


function getPosts() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}


function createPost(post, post4) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post, post4);
            const error = false
            if (!error) {
                resolve()
            }
            else { reject("Error:something went wrong") }
        }, 2000);
    });
}


function removePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else { reject("Array is empty now") }
        }, 1000);
    })
}