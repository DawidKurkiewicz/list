const btn = document.querySelector("button")
const li = document.querySelectorAll("li")
let fontSize = 10

btn.addEventListener("click", () => {
    fontSize++
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block"
        li[i].style.fontSize = `${fontSize}px`
    }
})
