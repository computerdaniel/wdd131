// Show and hide the explanation of how the landslide risk ratings were assigned.

const methodButton = document.querySelector("#method-toggle");
const methodDetails = document.querySelector("#method-details");

if (methodButton && methodDetails) {
  methodButton.addEventListener("click", () => {
    const isExpanded =
      methodButton.getAttribute("aria-expanded") === "true";

    methodButton.setAttribute("aria-expanded", String(!isExpanded));
    methodDetails.hidden = isExpanded;

    methodButton.querySelector("span").textContent =
      isExpanded ? "+" : "−";
  });
}

// Keep the footer year current automatically.

const year = new Date().getFullYear();
const footerYear = document.querySelector("footer p:last-child");

if (footerYear) {
  footerYear.textContent =
    `Created for an educational landslide-risk comparison · ${year}`;
}