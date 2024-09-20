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


// Function to redirect to 'soon.html' after showing the loader
function redirectToSoon() {
    const loadingScreen = document.getElementById("loading-screen");
    
    // Show the loader
    loadingScreen.style.display = "flex"; 
    
    // Simulate a delay before redirecting (optional)
    setTimeout(function() {
        window.location.href = "soon.html"; // Redirect to soon.html
    }, 1000); // Adjust the time if needed
}

// Handle the chat form loading and redirect
document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chatForm");
    const loadingScreen = document.getElementById("loading-screen");

    // Handle form submission for chat
    chatForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show the loading screen
        loadingScreen.style.display = "flex";

        // Simulate a delay for loading (e.g., 2 seconds)
        setTimeout(function () {
            // After delay, redirect to Chatbox.html
            window.location.href = "../Html/Chatbox.html";
        }, 2000); // 2-second delay
    });
});

