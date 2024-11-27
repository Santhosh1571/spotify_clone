document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const playButtons = document.querySelectorAll(".play-button");

    // Play individual tracks
    playButtons.forEach(button => {
      button.addEventListener("click", () => {
        const track = button.getAttribute("data-track");
        audioPlayer.src = track;
        audioPlayer.play();
      });
    });

    // Play All functionality (if needed)
    const playAllBtn = document.getElementById("play-all-btn");
    playAllBtn.addEventListener("click", () => {
      let currentIndex = 0;

      const playNextTrack = () => {
        if (currentIndex < playButtons.length) {
          const track = playButtons[currentIndex].getAttribute("data-track");
          audioPlayer.src = track;
          audioPlayer.play();
          currentIndex++;
        }
      };

      audioPlayer.addEventListener("ended", playNextTrack); // Play next when current ends
      playNextTrack(); // Start with the first track
    });
  });

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
  document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const musicBar = document.getElementById("music-bar");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const musicBarTitle = document.getElementById("music-bar-title");
    const musicBarArtist = document.getElementById("music-bar-artist");
    const musicBarImg = document.getElementById("music-bar-img");
  
    let currentTrackIndex = 0;
  
    const tracks = [
      { title: "Nira Nira", artist: "Takkar", src: "/assets/songs/nira.mp3", img: "/11.jpg" },
      { title: "Goiyala", artist: "Takkar", src: "/assets/songs/goiyala.mp3", img: "/11.jpg" },
      { title: "Maragatha", artist: "Takkar", src: "/assets/songs/maragatha.mp3", img: "/11.jpg" },
    ];
  
    const loadTrack = (index) => {
      const track = tracks[index];
      audioPlayer.src = track.src;
      musicBarTitle.textContent = track.title;
      musicBarArtist.textContent = track.artist;
      musicBarImg.src = track.img;
      musicBar.style.display = "flex";
    };
  
    const playTrack = () => {
      audioPlayer.play();
      playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    };
  
    const pauseTrack = () => {
      audioPlayer.pause();
      playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    };
  
    playPauseBtn.addEventListener("click", () => {
      if (audioPlayer.paused) {
        playTrack();
      } else {
        pauseTrack();
      }
    });
  
    prevBtn.addEventListener("click", () => {
      currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
      loadTrack(currentTrackIndex);
      playTrack();
    });
  
    nextBtn.addEventListener("click", () => {
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
      loadTrack(currentTrackIndex);
      playTrack();
    });
  
    // Load track when clicking a play button in the table
    document.querySelectorAll(".play-button").forEach((button, index) => {
      button.addEventListener("click", () => {
        currentTrackIndex = index;
        loadTrack(index);
        playTrack();
      });
    });
  });
  
  
  