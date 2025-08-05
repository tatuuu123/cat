// setTimeout(() => {
// console.log(0);
// },0);


// Promise.resolve(10).then(number=>{
//     console.log(number);
    
// })
// //async vs sync
// //async = micro task and macro task
// console.log(1);
// Promise.resolve(10).then(n=>{
//     return n
// }).then(n2=>{
//     console.log(n2*2);
    
// }).catch(err=>{
//     console.log(err);
    
// })
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json())
// .then(dog => {console.log(dog);
// const img = document.createElement("img")
// img.src = dog.message
// img.style.width = "300px"
// img.style.height ="300px"
// const body = document.querySelector("body")
// body.appendChild(img)
// })
// setInterval(() =>{
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json())
// .then(dog => {console.log(dog);
// const img = document.createElement("img")
// img.src = dog.message
// img.style.width = "300px"
// img.style.height ="300px"
// const body = document.querySelector("body")
// body.appendChild(img)
// })

// },3000)
setInterval(() =>{
fetch("https://api.thecatapi.com/v1/images/search")
.then(res => res.json())
.then(cat => {console.log(cat);
const img = document.createElement("img")
img.src = cat[0].url;
img.style.width = "300px"
img.style.height ="300px"
const body = document.querySelector("body")
body.appendChild(img)
})




},3000)

