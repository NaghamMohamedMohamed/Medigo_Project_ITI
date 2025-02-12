// document.addEventListener("DOMContentLoaded", function () {
//     function checkWindowSize() {
//         let siteHeader = document.querySelector(".site-header");
//         let menuToggle = document.querySelector(".menu-toggle-btn");
//         let responsiveMenu = document.querySelector(".responsive_menu");

//         if (window.innerWidth <= 1010) {
//             siteHeader.style.display = "none"; // Hide site header
//             menuToggle.style.display = "block"; // Show menu toggle button
//         } else {
//             siteHeader.style.display = "block"; // Show site header
//             menuToggle.style.display = "none"; // Hide menu toggle button
//             responsiveMenu.style.display = "none"; // Ensure menu is hidden when resizing back
//         }
//     }

//     // Run checkWindowSize initially and on window resize
//     checkWindowSize();
//     window.addEventListener("resize", checkWindowSize);

//     // Toggle responsive menu on button click
//     document.querySelector(".menu-toggle-btn").addEventListener("click", function () {
//         let menu = document.querySelector(".responsive_menu");
//         if (menu.style.display === "none" || menu.style.display === "") {
//             menu.style.display = "block"; // Show the menu
//         } else {
//             menu.style.display = "none"; // Hide the menu
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     function checkWindowSize() {
//         let siteHeader = document.querySelector(".site-header");
//         let menuToggle = document.querySelector(".menu-toggle-btn");
//         let responsiveMenu = document.querySelector(".responsive_menu");

//         if (!siteHeader || !menuToggle || !responsiveMenu) {
//             console.error("One or more elements not found!");
//             return;
//         }

//         if (window.innerWidth <= 1010) {
//             siteHeader.style.display = "none"; // Hide the main header
//             menuToggle.style.display = "block"; // Show menu toggle button
//         } else {
//             siteHeader.style.display = "block"; // Show main header
//             menuToggle.style.display = "none"; // Hide menu toggle button
//             responsiveMenu.style.display = "none"; // Ensure menu is hidden when resizing back
//         }
//     }

//     // Initial check and resize event
//     checkWindowSize();
//     window.addEventListener("resize", checkWindowSize);

//     // Toggle responsive menu when clicking the menu button
//     document.querySelector(".menu-toggle-btn").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent default anchor behavior
//         let menu = document.querySelector(".responsive_menu");
//         if (menu.style.display === "none" || menu.style.display === "") {
//             menu.style.display = "block"; // Show menu
//         } else {
//             menu.style.display = "none"; // Hide menu
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     function checkWindowSize() {
//         let siteHeader = document.querySelector(".site-header");
//         let menuToggle = document.querySelector(".menu-toggle-btn");
//         let responsiveMenu = document.querySelector(".responsive_menu");

//         if (!siteHeader || !menuToggle || !responsiveMenu) {
//             console.error("One or more elements not found!");
//             return;
//         }

//         console.log("Window width:", window.innerWidth); // Debugging line

//         if (window.innerWidth <= 1010) {
//             siteHeader.style.display = "none"; // Hide main header
//             menuToggle.style.display = "block"; // Show menu toggle button
//         } else {
//             siteHeader.style.display = "block"; // Show main header
//             menuToggle.style.display = "none"; // Hide menu toggle button
//             responsiveMenu.style.display = "none"; // Hide menu when resizing back
//         }
//     }

//     // Run function on page load and window resize
//     checkWindowSize();
//     window.addEventListener("resize", checkWindowSize);

//     // Toggle menu when button is clicked
//     document.querySelector(".menu-toggle-btn").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent default behavior
//         let menu = document.querySelector(".responsive_menu");
//         if (menu.style.display === "none" || menu.style.display === "") {
//             menu.style.display = "block"; // Show menu
//         } else {
//             menu.style.display = "none"; // Hide menu
//         }
//     });
// });


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

// document.addEventListener("DOMContentLoaded", function () {
//     function initializeQuoteSlider() {
//         let slideIndex = 0;
//         const slides = document.querySelectorAll(".feedback-slide");
//         const dots = document.querySelectorAll(".dot");
    
//         function showSlides() {
//             slides.forEach((slide, i) => {
//                 slide.classList.toggle("active", i === slideIndex);
//                 dots[i].classList.toggle("active", i === slideIndex);
//             });
//         }
    
//         function nextSlide() {
//             slideIndex = (slideIndex + 1) % slides.length;
//             showSlides();
//         }
    
//         function currentSlide(index) {
//             slideIndex = index;
//             showSlides();
//         }
    
//         dots.forEach((dot, index) => {
//             dot.addEventListener("click", () => currentSlide(index));
//         });
    
//         showSlides();
//         setInterval(nextSlide, 3000);
//     }
    
//     // Call the function when the page loads
//     initializeQuoteSlider();
//     ;
// });
