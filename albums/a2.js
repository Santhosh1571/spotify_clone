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
      { title: "Google Google", artist: "Thuppakki", src: "/assets/songs/Google-Google.mp3", img: "/12.jpg" },
      { title: "Kutty Puli Kootam", artist: "Thuppakki", src: "/assets/songs/Kutti-Puli-Kootam.mp3", img: "/12.jpg" },
      { title: "Poi Varavaa", artist: "Thuppakki", src: "/assets/songs/Poi-Varavaa.mp3", img: "/12.jpg" },
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
  
  
  