const themeSelector = document.querySelector("#theme");

themeSelector.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeSelector.value === "dark");
});