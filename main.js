// Wait for the water animation to complete, then hide the loading screen and show the main content
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 3000); // Matches the animation duration (3 seconds)
});

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeButton = navMenu.querySelector('.close-button');

    if (navMenu.style.right === "0px") {
        navMenu.style.right = "-250px"; // Close the menu
        closeButton.style.display = "none"; // Hide the X button
        hamburgerMenu.style.display = "flex"; // Show the hamburger menu
    } else {
        navMenu.style.right = "0px"; // Open the menu
        closeButton.style.display = "block"; // Show the X button
        hamburgerMenu.style.display = "none"; // Hide the hamburger menu
    }
}

// Valentine's Day target date (example: 14th February 2025)
const targetDate = new Date("2025-02-14T00:00:00"); // Adjust the target date

// Update the countdown timer every second
function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  const countdownElement = document.getElementById("countdown-timer");

  if (timeRemaining > 0) {
    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown timer in the menu
    countdownElement.textContent = `Time Left: ${days}:${hours}:${minutes}:${seconds}`;
    countdownElement.style.visibility = "visible"; // Show the timer
  } else {
    // If the timer reaches zero, remove the countdown
    countdownElement.textContent = "";
    countdownElement.style.visibility = "hidden"; // Hide the timer
  }
}

// Check if the Valentine Card is clicked
let hasClickedValentinesCard = false; // Track if the Valentine Card was clicked before

document.getElementById("valentine-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default navigation behavior

  const waitingModal = document.getElementById("waiting-modal");

  // If it's already been clicked and the modal has been shown, do nothing
  if (hasClickedValentinesCard) {
    return;
  }

  if (new Date() < targetDate) {
    // Show the waiting modal if the timer has not reached 0
    waitingModal.style.display = 'flex'; // Show the modal

    // Hide the modal after 10 seconds and reset the click tracking
    setTimeout(function() {
      waitingModal.style.display = 'none'; // Hide the modal
      hasClickedValentinesCard = false; // Reset for future clicks
    }, 10000); // 10 seconds delay before hiding
  } else {
    // If the timer is done, unlock the Valentine's Card content or take further action
    window.location.href = "valen.html"; // Redirect to the Valentine's Card page
  }

  hasClickedValentinesCard = true; // Mark that the Valentine's Card has been clicked
});

// Update the countdown every second
setInterval(updateCountdown, 1000);
