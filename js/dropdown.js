document.addEventListener('DOMContentLoaded', function() {
  let dropdownButton = document.querySelector('.dropbtn');

  if(dropdownButton) {
    dropdownButton.addEventListener('click', function() {
      let dropdownContent = document.querySelector('.dropdown-content');
      if(dropdownContent) {
        dropdownContent.classList.toggle('show');
      }
    });
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
      }
    }
  };
});