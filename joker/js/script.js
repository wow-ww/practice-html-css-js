// Element.classList.toggle() 元素增加或移除类
function toggle() {
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}