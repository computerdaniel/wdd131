
const form = document.querySelector("#event-form");
const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extra-field");
const extraLabel = document.querySelector("#extra-label");
const extraInput = document.querySelector("#extra-input");
const extraHelp = document.querySelector("#extra-help");
const errors = document.querySelector("#errors");
const ticket = document.querySelector("#ticket");
const ticketDetails = document.querySelector("#ticket-details");

// Set the minimum date to tomorrow.
const tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const minimumDate = formatDateValue(tomorrow);
dateInput.min = minimumDate;

// Display the correct field for the selected type.
function updateTypeField() {
  const type = typeSelect.value;
  const visible = type === "student" || type === "guest";

  extraField.classList.toggle("hidden", !visible);
  extraInput.required = visible;
  extraInput.value = "";

  if (type === "student") {
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "Enter your 9-digit I-number";
    extraInput.inputMode = "numeric";
    extraHelp.textContent = "Your I-number must contain exactly 9 digits.";
  } else if (type === "guest") {
    extraLabel.textContent = "Access Code";
    extraInput.placeholder = "Enter your access code";
    extraInput.inputMode = "text";
    extraHelp.textContent = "Enter the code EVENT131.";
  } else {
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "";
    extraHelp.textContent = "";
  }

  errors.replaceChildren();
  ticket.classList.add("hidden");
}

typeSelect.addEventListener("change", updateTypeField);

// Validate the form and display errors below it.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  errors.replaceChildren();
  ticket.classList.add("hidden");

  const errorMessages = [];
  const name = nameInput.value.trim();
  const date = dateInput.value;
  const type = typeSelect.value;
  const extra = extraInput.value.trim();

  if (!name) {
    errorMessages.push("Please enter your full name.");
  }

  if (!date) {
    errorMessages.push("Please select an event date.");
  } else if (date < minimumDate) {
    errorMessages.push("The event date must be later than today.");
  }

  if (!type) {
    errorMessages.push("Please select Student or Guest.");
  }

  if (type === "student" && !/^\d{9}$/.test(extra)) {
  errorMessages.push("Student I# must be exactly 9 digits.");
}

  if (type === "guest" && extra !== "EVENT131") {
    errorMessages.push("The guest access code must be EVENT131.");
  }

  if (errorMessages.length > 0) {
    const heading = document.createElement("h2");
    heading.textContent = "Please fix the following errors:";

    const list = document.createElement("ul");

    errorMessages.forEach(function (message) {
      const item = document.createElement("li");
      item.textContent = message;
      list.appendChild(item);
    });

    errors.append(heading, list);
    errors.focus();
    return;
  }

  // Show ticket information when validation succeeds.
  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  );

  const ticketType = type === "student" ? "Student" : "Guest";

  ticketDetails.textContent =
    `Name: ${name} | Event: ${formattedDate} | Ticket type: ${ticketType}`;

  ticket.classList.remove("hidden");
  ticket.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// Clear old feedback when the user changes an answer.
form.addEventListener("input", function () {
  errors.replaceChildren();
  ticket.classList.add("hidden");
});
