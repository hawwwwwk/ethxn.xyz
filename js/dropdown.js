document.addEventListener('DOMContentLoaded', function() {
  let dropdownButtons = document.querySelectorAll('.dropbtn');

  if(dropdownButtons) {
    dropdownButtons.forEach(function(dropdownButton) {
      dropdownButton.addEventListener('click', function() {
        let dropdownContent = dropdownButton.nextElementSibling;
        if(dropdownContent) {
          dropdownContent.classList.toggle('show');
        }
      });
    });
  }

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdownContents = document.querySelectorAll('.dropdown-content');
      dropdownContents.forEach(function(dropdownContent) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      });
    }
  });
});