const btn = document.querySelector("button")

const li = document.querySelectorAll("li")

btn.addEventListener("click", () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block"
        li[i].style.fontSize = "10px"
    }
})
