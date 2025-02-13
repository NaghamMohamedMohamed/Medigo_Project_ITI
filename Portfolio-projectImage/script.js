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
