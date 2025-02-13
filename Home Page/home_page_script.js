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


/*************************** Portfolio Slideshow part in the home page ***************************/

const slider = document.querySelector(".cards");
const images = document.querySelectorAll(".cards img");
let index = 0;
// Get the width of one image
let imageWidth = images[0].clientWidth; 

function slideImages() 
{
    index++;
    if (index === ( images.length / 2 ) + 1) 
    {
        // Reset to first image
        index = 0; 
    }
    // Move left by one image width
    slider.style.transform = `translateX(-${index * imageWidth}px)`; 
}

// Auto slide every 3 seconds
setInterval(slideImages, 3000);



/*************************** Feedbacks slides Dots ( circles indicating the quote subpage in same section ) Slideshow part in the home page ***************************/
let slideIndex = 0;
const slides = document.querySelectorAll(".feedback-slide");
const dots = document.querySelectorAll(".dot");

function showSlides() 
{
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
        dots[i].classList.toggle("active", i === slideIndex);
    });
}

function nextSlide() 
{
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

function currentSlide(index) 
{
    slideIndex = index;
    showSlides();
}

showSlides();
setInterval(nextSlide, 3000);
