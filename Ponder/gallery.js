let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close-viewer');
gallery.addEventListener("click", function(event) {
    console.log(event.target.src);
    dialogImage.src = event.target.src.replace("-sm", "-full");
    dialog.showModal();
});

// Close modal on button click
closeButton.addEventListener('click', (event) => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
          