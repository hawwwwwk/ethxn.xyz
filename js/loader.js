document.addEventListener("DOMContentLoaded", function() {
  // This function will run when the DOM is fully loaded
  const loader = document.getElementById("loader");
  const content = document.querySelector(".content");

  // Hide the page content
  content.style.display = "none";

  // Show the loading message
  loader.style.display = "block";

  // Now, wait for all assets to be loaded (images, styles, etc.)
  window.addEventListener("load", function() {
      // When all assets are loaded, hide the loader and show the content
      loader.style.display = "none";
      content.style.display = "block";
  });
});