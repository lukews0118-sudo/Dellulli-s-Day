const playButton = document.getElementById("playButton");

if (playButton) {
    playButton.addEventListener("click", function() {
        window.location.href = "video.html";
    });
}

const video = document.getElementById("introVideo");
const nextButton = document.getElementById("nextButton");

if (video) {
    video.addEventListener("ended", function() {
        nextButton.style.display = "block";
    });
}

if (nextButton) {
    nextButton.addEventListener("click", function() {
        window.location.href = "bedroom.html"; 
    });
}
