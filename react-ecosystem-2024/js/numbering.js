// Function to add numbering to list items
const addListNumbering = () => {
  const mainListItems = document.querySelectorAll(".nav-list-main > li > a");
  mainListItems.forEach((item, index) => {
    const number = (index + 1).toString().padStart(2, "0");
    item.innerHTML = `<span>${number}. </span>${item.textContent}`;
  });

  const subListItems = document.querySelectorAll(".nav-list-sub > li > a");
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
  ];

  subListItems.forEach((item, index) => {
    const numeral = romanNumerals[index];
    item.innerHTML = `<span>${numeral}. </span>${item.textContent}`;
  });
};

// Event listener for DOMContentLoaded to add numbering to list items
document.addEventListener("DOMContentLoaded", () => {
  addListNumbering();
});
