document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('.article-scroll-container');

    container.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
            // Scrolling down
            container.scrollLeft += 300; // Adjust this value for scrolling speed
        } else {
            // Scrolling up
            container.scrollLeft -= 300; // Adjust this value for scrolling speed
        }
    });
});
