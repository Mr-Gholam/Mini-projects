const rightBtn = document.querySelector('.right'),
    leftBtn = document.querySelector('.left'),
    slides = document.querySelectorAll('.slide'),
    radioBtns = document.querySelector('.radioBtns')

let currentIndex = 0
rightBtn.addEventListener('click', () => increaseSlide())

leftBtn.addEventListener('click', () => decreaseSlide())

for (let index = 0; index < slides.length; index++) {
    const btn = document.createElement('button')
    btn.innerText = index + 1
    btn.classList.add('radioBtn')
    radioBtns.appendChild(btn)
    btn.addEventListener('click', () => {
        const status = index > currentIndex ? -1 : index < currentIndex ? 1 : 0
        if (status == -1) return increaseSlide(index)
        if (status == 1) return decreaseSlide(index)
    })
    btn.onmouseenter = () => {
        const background = document.createElement('div')
        const img = document.createElement('img')
        img.src = slides[index].childNodes[1].src
        background.style.width = "75%"
        background.style.height = "200%"
        background.style.position = "absolute"
        background.style.background = "rgba(25, 55, 63, 1)"
        background.style.borderRadius = "1rem"
        background.style.top = '-198%'
        background.style.zIndex = '+5'
        img.style.width = "100%"
        img.style.height = "100%"
        img.style.objectFit = "cover"
        img.style.borderRadius = 'inherit'
        background.appendChild(img)
        btn.appendChild(background)
    }

    btn.onmouseleave = () => {
        btn.removeChild(btn.childNodes[1])
    }

}

function increaseSlide(index) {
    const nextIndex = index != null ? index : currentIndex < slides.length - 1 ? currentIndex + 1 : 0

    const currentSlide = document.querySelector(`[data-index="${currentIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

    nextSlide.style.transform = "translate(-100vw,0)"

    currentSlide.animate({ transform: 'translate(100vw, 0)' }, { duration: 500, easing: 'ease-out' })
    nextSlide.animate({ transform: 'translate(0, 0)' }, { duration: 400, easing: 'ease-out' })

    setTimeout(() => {
        currentSlide.dataset.status = 'inactive'
        nextSlide.dataset.status = 'active'
    }, 390)

    currentIndex = nextIndex
}
function decreaseSlide(index) {
    const previousIndex = index != null ? index : currentIndex == 0 ? slides.length - 1 : currentIndex - 1

    const currentSlide = document.querySelector(`[data-index="${currentIndex}"]`),
        previousSlide = document.querySelector(`[data-index="${previousIndex}"]`)


    previousSlide.style.transform = "translate(100vw,0)"

    currentSlide.animate({ transform: 'translate(-100vw, 0)' }, { duration: 550, easing: 'cubic-bezier(.84,.44,.59,.98)' })

    previousSlide.animate({ transform: 'translate(0, 0)' }, { duration: 550, easing: 'cubic-bezier(.36,1.01,.6,1)' })

    setTimeout(() => {
        currentSlide.dataset.status = 'inactive'
        previousSlide.dataset.status = 'active'
    }, 500)

    currentIndex = previousIndex
}