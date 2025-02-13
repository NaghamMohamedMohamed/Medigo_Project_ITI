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


/*************************** For portfolio projects cards expansion ( full screen ) ***************************/
function openFullscreen(icon) {
    const modal = document.getElementById('fullscreenModal');
    const fullscreenImg = document.getElementById('fullscreenImage');
    const fullscreenText = document.getElementById('fullscreenText');

     const imageWrapper = icon.closest('.image-wrapper');
    const imgSrc = imageWrapper.querySelector('img').src;
    const imgTitle = imageWrapper.querySelector('.overlay h3').textContent; // Get h3 title

    fullscreenImg.src = imgSrc;
    fullscreenText.textContent = imgTitle; // Set h3 text below image
    modal.style.display = "flex";
}

function closeFullscreen() {
    document.getElementById('fullscreenModal').style.display = "none";
}
