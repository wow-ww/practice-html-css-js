const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function setAction(i) {
    for(let slide of slides) {
        slide.classList.remove('active');
        console.log(slide);
        console.log(slides)
        slides[i].classList.add('active');
    }
    for(let dot of dots) {
        dot.classList.remove('active');
        dots[i].classList.add('active');
    }
}

for(let j = 0; j<dots.length; j++) {
    dots[j].addEventListener('click', function() {
        setAction(j);
    });
}