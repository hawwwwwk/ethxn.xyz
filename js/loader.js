document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById("loader");
  const content = document.querySelector(".content");

  content.style.display = "none";

  loader.style.display = "block";

  window.addEventListener("load", function() {
      loader.style.display = "none";
      content.style.display = "block";
  });
});
