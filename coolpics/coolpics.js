const menuButton = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
});




const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const closeButton = document.querySelector(".close-btn");

const images = document.querySelectorAll(".gallery img");



images.forEach((image) => {
    image.addEventListener("click", () => {

        modalImage.src = "https://wddbyui.github.io/wdd131/images/norris-full.jpg";

        modalImage.alt = image.alt;

        modal.showModal();
    });
});


closeButton.addEventListener("click", () => {
    modal.close();
});



modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.close();
    }

});



document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.open) {
        modal.close();
    }

});

