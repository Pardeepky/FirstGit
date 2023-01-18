// console.log("Husband and Wife enters")
// console.log("Husband and Wife chat stars")
// const premovie=async ()=>{
//     const PromiseWifeBringingTickets= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('tickets')
//             reject('Error in something')
//         }, 1000);
//     })
// const getPopcorn=new Promise((resolve,reject)=>{
//     resolve('popcorn') 
// reject('Error in something')
// })
// const getButter=new Promise((resolve,reject)=>{ 
//     resolve('popcorn') 
// reject('Error in something')})
// const getColdDrink=new Promise((resolve,reject)=>{
//     resolve('cold drink') 
// reject('Error in something')
// })

// let tickets= await PromiseWifeBringingTickets

// console.log(`Wife: I have ${tickets}`)
// console.log("Husband: we should go in")
// console.log("Wife: no I am hungry")

//  let popcorn=await getPopcorn

// console.log(`Husband: I got some ${popcorn}`)
// console.log("Husband: we should go in")
// console.log("Wife: I need butter on my popcorn")

// let butter=await getButter
// console.log(`Husband: I got ${butter}`)
// console.log("Husband: anything else darling")
// console.log("Wife: Umm... One cold drink also") 

// let drink= await getColdDrink
// console.log(`Husband: I got some ${drink}`)
// console.log("Wife: Lets go for movie we are getting late") 
// return tickets
// }
// premovie().then((a)=> {
//     console.log(`person 3: show${a}`)
// })
// .catch((err)=>console.log(err))
console.log("Husband and Wife enters")
console.log("Husband and Wife chat stars")
const premovie = async () => {
    const PromiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tickets')
            reject('Error in something')
        }, 1000);
    })
    const getPopcorn = new Promise((resolve, reject) => {
        resolve('popcorn')
        reject('Error in something')
    })
    const getButter = new Promise((resolve, reject) => {
        resolve('popcorn')
        reject('Error in something')
    })
    const getColdDrink = new Promise((resolve, reject) => {
        resolve('cold drink')
        reject('Error in something')
    })

    let tickets = await PromiseWifeBringingTickets
    let [Popcorn, Butter, ColdDrink] = await Promise.all([getPopcorn, getButter, getColdDrink])
    console.log(`${Popcorn},${Butter},${ColdDrink}`)
    return tickets
}
premovie().then((a) => {
    console.log(`person 3: show${a}`)
})
    .catch((err) => console.log(err))