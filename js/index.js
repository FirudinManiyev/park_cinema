fetch('https://park-cinema-data-tau.vercel.app/landing')
  .then(res => res.json())
  .then(movies => {
    const container = document.getElementById('movie-grid');

    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-lg";

     const imgUrl = `https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${movie.image}&w=1080&q=75`

      card.innerHTML = `
            <a href="pages/detail.html"><div
              class="relative w-[320px] h-[400px] rounded-xl overflow-hidden bg-cover bg-center"
              style="background-image: url('${imgUrl}');">

              <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div class="absolute bottom-4 left-4 z-10 text-white">
                <h2 class="text-xl font-semibold">${movie.name || 'Sörfçü'}</h2>
                <p class="text-sm font-light mt-1">${movie.year || '01.05.2025'}</p>
                <p class="text-sm mt-1">${movie.ageLimit || '18+'}</p>
              </div>

              <div class="absolute bottom-4 right-20 z-10 text-white text-sm font-medium">
                ${movie.languages || 'AZ'}
              </div>
            </div></a>
          `;

      container.appendChild(card);
    });
  })