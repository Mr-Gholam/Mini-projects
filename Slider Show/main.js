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
    btn.dataset.index = `${index}`
    btn.classList.add('radioBtn')
    if (index == 0) {
        btn.dataset.status = "active"
    } else {
        btn.dataset.status = "inactive"
    }
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
        btn.style.border = "1px solid white"
    }

    btn.onmouseleave = () => {
        btn.removeChild(btn.childNodes[1])
        btn.style.border = "0px solid white"
    }

}

function increaseSlide(index) {
    const nextIndex = index != null ? index : currentIndex < slides.length - 1 ? currentIndex + 1 : 0

    const currentSlide = document.querySelector(`[data-index="${currentIndex}"]`),
        currentRadioBtn = document.querySelector(`.radioBtn[data-index="${currentIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`),
        nextRadioBtn = document.querySelector(`.radioBtn[data-index="${nextIndex}"]`)

    nextSlide.style.transition = "none"
    nextSlide.style.transform = "translate(-100vw,0)"

    currentSlide.style.transform = "translate(100vw,0)"
    nextSlide.style.transition = "all 400ms cubic-bezier(0.84, 0.44, 0.59, 0.98)"
    nextSlide.style.transform = "translate(0,0)"


    setTimeout(() => {
        currentSlide.dataset.status = 'inactive'
        currentRadioBtn.dataset.status = 'inactive'
        nextSlide.dataset.status = 'active'
        nextRadioBtn.dataset.status = 'active'
        currentIndex = nextIndex
    }, 350)

}
function decreaseSlide(index) {
    const previousIndex = index != null ? index : currentIndex == 0 ? slides.length - 1 : currentIndex - 1

    const currentSlide = document.querySelector(`[data-index="${currentIndex}"]`),
        currentRadioBtn = document.querySelector(`.radioBtn[data-index="${currentIndex}"]`),
        previousSlide = document.querySelector(`[data-index="${previousIndex}"]`),
        previousRadioBtn = document.querySelector(`.radioBtn[data-index="${previousIndex}"]`)


    previousSlide.style.transition = "none"
    previousSlide.style.transform = "translate(100vw,0)"

    currentSlide.style.transform = "translate(-100vw,0)"
    previousSlide.style.transition = "all 400ms cubic-bezier(0.84, 0.44, 0.59, 0.98)"
    previousSlide.style.transform = "translate(0,0)"


    setTimeout(() => {
        currentSlide.dataset.status = 'inactive'
        currentRadioBtn.dataset.status = 'inactive'
        previousSlide.dataset.status = 'active'
        previousRadioBtn.dataset.status = 'active'
        currentIndex = previousIndex
    }, 350)

}