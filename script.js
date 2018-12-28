const btn = document.querySelector("button")
const li = document.querySelectorAll("li")
let fontSize = 10
// FOR
// btn.addEventListener("click", () => {
//     for (let i = 0; i < li.length; i++) {
//         if (!li[i].style.display) {
//             li[i].style.display = "block"
//         }
//         li[i].style.fontSize = `${fontSize}px`
//     }
//     fontSize++

// })

//FOREACH
btn.addEventListener("click", () => {
    li.forEach((liitem) => {
        liitem.style.display = "block"
        liitem.style.fontSize = `${fontSize}px`
    })
    fontSize++

})

