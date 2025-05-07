// 3 xetli menyu
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-y-full');
});

// dil menyusu
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden');
}

document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('dropdownMenu');
  const button = document.getElementById('dropdownButton');
  if (!button.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});

// Slider
function scrollNext() {
  const slider = document.getElementById("slider");
  const width = slider.clientWidth;
  slider.scrollBy({ left: width, behavior: "smooth" });
}

// oturacaqlar
const seatContainer = document.getElementById("seat-container");

// Hər sıra üçün konfiqurasiya
const layout = [
  { count: 17, offset: 0 },
  { count: 13, offset: 2 },
  { count: 13, offset: 2 },
  { count: 13, offset: 2 },
  { count: 13, offset: 2 },
  { count: 13, offset: 2 },
  { count: 11, offset: 2 },
  { count: 11, offset: 2 },
  { count: 11, offset: 2 },
  { count: 11, offset: 2 },
  { count: 11, offset: 2 },
  { count: 10, offset: 3 },
];

layout.forEach((row, index) => {
  const rowDiv = document.createElement("div");
  rowDiv.className = "flex items-center space-x-[2px] sm:space-x-1";

  // Sıra nömrəsi
  const rowNumber = document.createElement("div");
  rowNumber.textContent = 12 - index;
  rowNumber.className = "w-5 sm:w-6 text-right mr-1 sm:mr-2 text-xs sm:text-sm";
  rowDiv.appendChild(rowNumber);

  // Boş sahə
  for (let i = 0; i < row.offset; i++) {
    const spacer = document.createElement("div");
    spacer.className = "w-6 h-6 sm:w-8 sm:h-8 invisible";
    rowDiv.appendChild(spacer);
  }

  // Oturacaqlar
  for (let i = 1; i <= row.count; i++) {
    const seat = document.createElement("div");
    seat.textContent = i;
    seat.className = "seat w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 text-black text-[10px] sm:text-sm flex items-center justify-center rounded-md cursor-pointer transition-colors duration-200";

    // Seçim click effekti
    seat.addEventListener("click", () => {
      seat.classList.toggle("bg-red-500");
      seat.classList.toggle("bg-gray-300");
      seat.classList.toggle("text-white");
    });

    rowDiv.appendChild(seat);
  }

  seatContainer.appendChild(rowDiv);
});

// Zoom funksiyası
let scale = 1;
const cinema = document.getElementById("cinema");

function zoomIn() {
  scale += 0.1;
  cinema.style.transform = `scale(${scale})`;
}

function zoomOut() {
  scale = Math.max(0.5, scale - 0.1);
  cinema.style.transform = `scale(${scale})`;
}

// alis yeri
function toggleButton() {
  const checkbox = document.getElementById("terms");
  const button = document.getElementById("payButton");
  if (checkbox.checked) {
    button.disabled = false;
    button.classList.remove("opacity-50", "cursor-not-allowed");
    button.classList.add("hover:bg-red-700");
  } else {
    button.disabled = true;
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.classList.remove("hover:bg-red-700");
  }
}