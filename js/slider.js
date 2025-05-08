const slider = document.getElementById("slider");
const slides = slider.children;
let currentIndex = 0;

function scrollNext() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    const width = slider.clientWidth;
    slider.scrollTo({ left: width * currentIndex, behavior: "smooth" });
}

// Mouse və touch sürüşdürmə
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('cursor-grabbing');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('cursor-grabbing');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('cursor-grabbing');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});

// Touch üçün
slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});