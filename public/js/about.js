const text = document.querySelectorAll(".text")
console.log(text)

function btnClick(reveal) {
    for (let i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    document.getElementById(reveal).style.display = "block"
}
