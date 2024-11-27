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
      { title: "Valaiyosai", artist: "Sathya", src: "/assets/songs/Valaiyosai SPBala.mp3", img: "1.jpg" },
      { title: "Pachamalai", artist: "Kizhakku vaasal", src: "/assets/songs/Pachamalai.mp3", img: "2.jpg" },
      { title: "Rathireyil", artist: "Thangamagan", src: "/assets/songs/Rathireyil.mp3", img: "3.jpg" },
      { title: "Sangeetha Megam", artist: "Udhaya gheedham", src: "/assets/songs/Sangeetha Megam Udhay.mp3", img: "4.jpg" },
      { title: "vaa Vennila", artist: "Mella thirandhadhu kadhavu", src: "/assets/songs/vaa Vennila.mp3", img: "5.jpg" },
      { title: "Andhi Vaanil", artist: "ARM", src: "/assets/songs/Andhi Vaanil.mp3", img: "6.jpg" },
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
  // Add event listener to heart buttons
document.querySelectorAll('.heart-button').forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Get song and artist from data attributes
      const song = this.dataset.song;
      const artist = this.dataset.artist;
  
      // Retrieve existing songs from localStorage
      let savedSongs = JSON.parse(localStorage.getItem('savedSongs')) || [];
  
      // Check if the song is already saved
      const isAlreadySaved = savedSongs.some(item => item.song === song && item.artist === artist);
      if (!isAlreadySaved) {
        // Add the new song to the list
        savedSongs.push({ song, artist });
  
        // Save updated list back to localStorage
        localStorage.setItem('savedSongs', JSON.stringify(savedSongs));
      }
  
      // Navigate to lib.html
      window.location.href = this.href;
    });
  });
  