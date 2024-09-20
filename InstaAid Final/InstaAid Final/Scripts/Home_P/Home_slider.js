document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  rightBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: 200, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: -200, behavior: "smooth" });
  });
});

function redirectToSoon() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex"; 
    setTimeout(function() {
        window.location.href = "soon.html";
    }, 1000);
}

function redirectToasthma() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex"; 
  setTimeout(function() {
      window.location.href = "asthma.html";
  }, 1000);
}

function redirectToElectric() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex"; 
  setTimeout(function() {
      window.location.href = "Electric.html";
  }, 1000);
}

function redirectToHeart() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex"; 
  setTimeout(function() {
      window.location.href = "Heart.html";
  }, 1000);
}


document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.querySelector(".chat-form");
    const loadingScreen = document.getElementById("loading-screen");
    chatForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loadingScreen.style.display = "flex";
        setTimeout(function () {
            window.location.href = "../Html/Chatbox.html";
        }, 2000);
    });
});


