let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

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