const posts = [{ title: "post 1", body: "this is post 1" },
{ title: "post 2", body: "this is post 2" }]


async function getPosts() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}


async function createPost(post) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false
            if (!error) {
                resolve()
            }
            else { reject("Error:something went wrong") }

        }, 2000);
    });
}


async function deletePost() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else { reject("Array is empty now") }

        }, 1000);
    })
}


async function printCreatePost() {
    await getPosts()
    await createPost({ title: "post 3", body: "this is post 3" })

    await getPosts()
    await createPost({ title: "post 4", body: "this is post 4" })
    await getPosts()
    await deletePost()
    await getPosts()
    await deletePost()
    await getPosts()
    await deletePost()
    await getPosts()
    await deletePost()
    await getPosts()
    try {
        await deletePost()
    }
    catch (error) {
        console.log(error)
    }

}

printCreatePost()