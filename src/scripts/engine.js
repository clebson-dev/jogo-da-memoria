const emojis = [
    "🪲", "🪲", "🐞", "🐞", "🐝", "🐝", "🦋", "🦋", "🐌", "🐌", "🦟", "🦟",
]

let openCards = []

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handClick

    document.querySelector(".game").appendChild(box)
}

function handClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen")
        openCards.push(this)
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }

    else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    openCards = []

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        modalEnd()
    }
}

function modalEnd() {
    let body = document.querySelector("body")

    let modal = document.createElement("div")
    modal.classList.add("modal")

    let h2 = document.createElement("h2")
    h2.textContent = "PARABÉNS VOCÊ GANHOU"
    let button = document.createElement("button")
    button.classList.add("reset")
    button.textContent = "NOVO JOGO"
    button.addEventListener("mousedown", () => {
        window.location.reload()
    })

    modal.appendChild(h2)
    modal.appendChild(button)

    body.appendChild(modal)
}