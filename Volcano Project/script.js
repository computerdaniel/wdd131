
// Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      navigation.classList.toggle("open");

      const isOpen = navigation.classList.contains("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    // Close menu after selecting a link
    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Volcano shape quiz
  const shapeButton = document.querySelector("#check-shapes");
  const shapeFeedback = document.querySelector("#shape-feedback");

  if (shapeButton && shapeFeedback) {
    shapeButton.addEventListener("click", () => {
      const shapeA = document.querySelector("#shape-a");
      const shapeB = document.querySelector("#shape-b");

      if (!shapeA || !shapeB) {
        shapeFeedback.textContent = "Quiz questions could not be found.";
        return;
      }

      const answerA = shapeA.value;
      const answerB = shapeB.value;

      if (answerA === "" || answerB === "") {
        shapeFeedback.textContent = "Please answer both questions first.";
        return;
      }

      let score = 0;

      if (answerA === "stratovolcano") {
        score++;
      }

      if (answerB === "shield") {
        score++;
      }

      if (score === 2) {
        shapeFeedback.textContent =
          "You got 2 out of 2 correct! Excellent work, volcano expert!";
      } else {
        shapeFeedback.textContent =
          "You got " + score + " out of 2 correct. Review the descriptions and try again.";
      }
    });
  }

  // Volcanic rock quiz
  const rockButton = document.querySelector("#check-rocks");
  const rockFeedback = document.querySelector("#rock-feedback");

  if (rockButton && rockFeedback) {
    rockButton.addEventListener("click", () => {
      const rockA = document.querySelector("#rock-a");
      const rockB = document.querySelector("#rock-b");

      if (!rockA || !rockB) {
        rockFeedback.textContent = "Quiz questions could not be found.";
        return;
      }

      const answerA = rockA.value;
      const answerB = rockB.value;

      if (answerA === "" || answerB === "") {
        rockFeedback.textContent = "Please answer both questions first.";
        return;
      }

      let score = 0;

      if (answerA === "Rhyolite") {
        score++;
      }

      if (answerB === "Gabbro") {
        score++;
      }

      if (score === 2) {
        rockFeedback.textContent =
          "You got 2 out of 2 correct! Great job identifying the rocks!";
      } else {
        rockFeedback.textContent =
          "You got " + score + " out of 2 correct. Remember to use both texture and composition.";
      }
    });
  }

});

