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

function toggleReview(element) {
    element.classList.toggle("active");
}

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const articleWidth = 300; // Breedte van elk artikel (aanpassen aan je eigen stijl)

let currentPosition = 0;

function moveCarousel(direction) {
  const maxPosition = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
  currentPosition += direction * articleWidth;
  currentPosition = Math.min(maxPosition, Math.max(0, currentPosition));
  carousel.style.transform = `translateX(-${currentPosition}px)`;
}

prevButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));

