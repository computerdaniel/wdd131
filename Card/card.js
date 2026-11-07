
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    attacked() {
        if (this.health > 0) {
            this.health -= 20;

            if (this.health <= 0) {
                this.health = 0;
                alert(`${this.name} has died!`);
            }

            displayCharacter();
        }
    },

    levelUp() {
        if (this.health > 0) {
            this.level++;
            displayCharacter();
        }
    }
};



function displayCharacter() {

    document.querySelector("#name").textContent = character.name;

    document.querySelector("#class").textContent = character.class;

    document.querySelector("#level").textContent = character.level;

    document.querySelector("#health").textContent = character.health;

    document.querySelector("#character-image").src = character.image;

    

    if (character.health === 0) {
        document.querySelector("#attacked").disabled = true;
        document.querySelector("#level-up").disabled = true;
    }
}




document.querySelector("#attacked").addEventListener("click", () => {
    character.attacked();
});



document.querySelector("#level-up").addEventListener("click", () => {
    character.levelUp();
});




displayCharacter();




document.querySelector("#reset").addEventListener("click", () => {
    character.health = 100;
    character.level = 1;

    document.querySelector("#attacked").disabled = false;
    document.querySelector("#level-up").disabled = false;

    displayCharacter();
});