const seat = document.getElementById('seat');
const pulSpan = document.getElementById('pul');

let selected = false;
let pul = 0;

seat.addEventListener('click', () => {
    selected = !selected;

    if (selected) {
        seat.classList.remove('bg-gray-300');
        seat.classList.add('bg-green-400');
        pul += 5;
    } else {
        seat.classList.remove('bg-green-400');
        seat.classList.add('bg-gray-300');
        pul -= 5;
    }

    pulSpan.textContent = pul;
});