// Wait for the water animation to complete, then hide the loading screen and show the main content
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 3000); // Matches the animation duration (3 seconds)
});