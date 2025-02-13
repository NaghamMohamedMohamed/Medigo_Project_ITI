/*************************** For responsive icon navigation menu and it's navigation menus for smaller screens ***************************/

function toggleMenu() 
{
    var menu = document.getElementById("responsive_menu");

    // Toggle menu visibility
    if (menu.style.display === "block") 
    {
        menu.style.display = "none";
    } 
    else 
    {
        menu.style.display = "block";
    }
}

// Hide menu when mouse leaves it
document.getElementById("responsive_menu").addEventListener("mouseleave", function () {
    this.style.display = "none";
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    var menu = document.getElementById("responsive_menu");
    var toggleBtn = document.querySelector(".menu-toggle-btn");

    // Close the menu only if clicking outside of it and the toggle button
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target))     
    {
        menu.style.display = "none";
    }
});

// Prevent the menu from closing when clicking on it
document.getElementById("responsive_menu").addEventListener("click", function (event) 
{
    event.stopPropagation();
});

/*************************** For selecting a page frm the pages choices titles ***************************/
function filterSelection(event, category) {
    let items = document.querySelectorAll('.card');

    items.forEach(item => {
      let categories = item.className.split(' '); // Convert class names into an array
      if (category === 'All' || categories.includes(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    document.querySelectorAll('.filter').forEach(filter => filter.classList.remove('active'));
    event.target.classList.add('active');
  }
  function openFullscreen(element) {
    var modal = document.getElementById("fullscreenModal");
    var fullscreenImg = document.getElementById("fullscreenImage");
    var fullscreenText = document.getElementById("fullscreenText");

    // Find the parent card and get the image + text
    var card = element.closest(".card");
    var imgSrc = card.querySelector(".image").src;
    var text = card.querySelector(".title").textContent;

    // Set modal content
    fullscreenImg.src = imgSrc;
    fullscreenText.textContent = text;

    // Show modal
    modal.style.display = "flex";
}

// Close function
function closeFullscreen() {
    document.getElementById("fullscreenModal").style.display = "none";
}

