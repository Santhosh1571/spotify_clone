function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}
document.addEventListener('DOMContentLoaded', function () {
  const heartButtons = document.querySelectorAll('.heart-button');

  heartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const song = e.target.closest('.heart-button').dataset.song;
      const artist = e.target.closest('.heart-button').dataset.artist;

      // Retrieve stored songs or initialize an empty array
      let savedSongs = JSON.parse(localStorage.getItem('savedSongs')) || [];

      // Check if the song already exists
      if (!savedSongs.find((s) => s.song === song)) {
        savedSongs.push({ song, artist });
        localStorage.setItem('savedSongs', JSON.stringify(savedSongs));
        alert(`${song} by ${artist} added to your library.`);
      } else {
        alert('Song already in your library.');
      }
    });
  });
});
