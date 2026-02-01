const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-btn')

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        nav.classList.remove('active')
    }
});

// Get references to modal elements
const dialog = document.querySelector('dialog');
const dialogImg = document.querySelector('dialog img');
const closeButton = document.querySelector('.close-viewer');
const imageCards = document.querySelectorAll('.image-card img');

// Add click event to each image in the gallery
imageCards.forEach((img) => {
    img.addEventListener('click', () => {
        dialogImg.src = img.src;
        dialogImg.alt = img.alt;
        dialog.showModal();
    });
});

// Close modal when X button is clicked
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal when clicking outside the image
dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});

// Close modal when Esc key is pressed (this is built-in for dialog elements)
// No code needed - <dialog> handles Esc automatically!

