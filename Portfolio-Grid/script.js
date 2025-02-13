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

