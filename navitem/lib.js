document.addEventListener('DOMContentLoaded', function () {
  const libraryContainer = document.getElementById('library-container');

  // Retrieve saved songs from local storage
  let savedSongs = JSON.parse(localStorage.getItem('savedSongs')) || [];

  if (savedSongs.length === 0) {
      libraryContainer.innerHTML = `
          <div class="text-center mt-5">
              <h3>No Songs in Your Library</h3>
              <p>Add songs from the album page to build your library!</p>
          </div>
      `;
      return;
  }

  savedSongs.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card library-card';
      card.innerHTML = `
          <img src="https://via.placeholder.com/300x200?text=${item.song}" class="card-img-top" alt="${item.song}">
          <div class="card-body">
              <h5 class="card-title">${item.song}</h5>
              <p class="card-text">Artist: ${item.artist}</p>
              <button class="btn btn-sm remove-song" data-index="${index}">
                  <i class="fa fa-trash"></i> Remove
              </button>
          </div>
      `;
      libraryContainer.appendChild(card);
  });

  document.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-song')) {
          const index = e.target.dataset.index;

          // Remove from local storage
          savedSongs.splice(index, 1);
          localStorage.setItem('savedSongs', JSON.stringify(savedSongs));

          // Refresh the library
          e.target.closest('.card').remove();
          if (savedSongs.length === 0) {
              libraryContainer.innerHTML = `
                  <div class="text-center mt-5">
                      <h3>No Songs in Your Library</h3>
                      <p>Add songs from the album page to build your library!</p>
                  </div>
              `;
          }
      }
  });
});
