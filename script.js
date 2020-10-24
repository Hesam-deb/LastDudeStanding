let Last = document.querySelector('#Last img')
let Eager = document.querySelector('#Eager img')
let score = document.querySelector('#score')

const jump = () => {
    if (Last.classList != 'jump') {
        Last.classList.add('jump')
    }
    setTimeout(() => {
        Last.classList.remove('jump')
    }, 500)
}

let checkDead = setInterval(() => {
    let LastTop = parseInt(window.getComputedStyle(Last).getPropertyValue("top"))
    let EagerLeft = parseInt(window.getComputedStyle(Eager).getPropertyValue("left"))

    if (EagerLeft < 50 && EagerLeft > 0 && LastTop >= 130) {
        Eager.style.animation = "none"
        Eager.style.display = "none"
        document.getElementById("gg-lose").play()
        document.getElementById("gg").pause()
        if (confirm("ريدی")) {
            window.location.reload();
        }
    } else {
        document.getElementById("gg").play()
    }
}, 10)

let i = 0;
setInterval(() => {
    i++
    score.textContent = i
},900)