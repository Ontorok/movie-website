const arrows = document.querySelectorAll('.arrow');
const movies = document.querySelectorAll('.movie-list')
let clickCounter = 0;

const screenWidth = window.screen.width



arrows.forEach((arrow, index) => {
    const itemCount = movies[index].querySelectorAll('img').length;
    arrow.addEventListener('click', () => {
        let itemInWindow = Math.floor(window.innerWidth / 270)
        clickCounter++;
        if (itemCount - (itemInWindow + clickCounter) >= 0) {
            movies[index].style.transform = `translateX(${movies[index].computedStyleMap().get('transform')[0].x.value - 300}px)`;
        } else {
            movies[index].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });
});

const toggleBall = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar,.navbar-container,.sidebar,.sidebar-menu-icon,.toggle,.toggle-ball');

toggleBall.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('dark')
    })
})

