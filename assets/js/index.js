const arrows = document.querySelectorAll('.arrow');
const movies = document.querySelectorAll('.movie-list')

arrows.forEach((arrow, index) => {
    const itemCount = movies[index].querySelectorAll('img').length;
    let clickCounter = 0;

    arrow.addEventListener('click', () => {
        clickCounter++;
        if (itemCount - (4 + clickCounter) >= 0) {
            movies[index].style.transform = `translateX(${movies[index].computedStyleMap().get('transform')[0].x.value - 300}px)`;
        } else {
            movies[index].style.transform = `translateX(0)`;
            clickCounter = 0;
        }

    });

    // console.log()
})