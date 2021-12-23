const arrows = document.querySelectorAll('.arrow');
const movies = document.querySelectorAll('.movie-list')
let clickCounter = 0;
let itemInWindow = 0;
const screenWidth = window.screen.width

switch (screenWidth) {
    case 1920:
        itemInWindow = 6;
        break;
    case 1280:
        itemInWindow = 4;
        break;
    case 1024:
        itemInWindow = 3;
        break;
    case 768:
        itemInWindow = 2;
        break;
    default:
        itemInWindow = 1;
        break;
}

arrows.forEach((arrow, index) => {
    const itemCount = movies[index].querySelectorAll('img').length;
    arrow.addEventListener('click', () => {
        clickCounter++;
        if (itemCount - (itemInWindow + clickCounter) >= 0) {
            movies[index].style.transform = `translateX(${movies[index].computedStyleMap().get('transform')[0].x.value - 300}px)`;
        } else {
            movies[index].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });
});

