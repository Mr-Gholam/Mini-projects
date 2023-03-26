const gallery = document.querySelector('.gallery')

window.onmousemove = e => {
    const xDecimal = e.clientX / window.innerWidth,
        yDecimal = e.clientY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
    console.log(maxX, xDecimal)

    const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
}